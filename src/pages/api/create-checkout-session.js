const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  // transform data for stripe understanding
  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "eur",
      //unit amount comes in cents, thats why multiply by 100
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

  // create a session (checkout page) with the transformed data and few more stripe options
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1JzdCwEIFO7PbCJisp8HpcuA"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    // metadata will be use in the webHooks
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  // every request needs a response - every req needs a res
  res.status(200).json({ id: session.id });
};
