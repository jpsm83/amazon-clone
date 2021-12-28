import Header from "../../components/Header";

// to use images with next/images you must allow the domain where those images comes from at next.config.js
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../slices/basketSlice";
import CheckoutProduct from "../../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

// public key comes from next.config.js that recives the real key from .env.local
// loadStripe create one Stripe object
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  // selectItems & selectTotal comes from basketSlice
  // to use those constants we must use useSelector
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  // session comes from next-Auth/client in the AuthProvider component at app.js
  // it wraps all our application allowing us to use at any other component
  const [session] = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call backend and create a checkout session
    // axios connect frontend with backend
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });

    // redirect user to stripe checkout
    const result = await stripe.redirectToCheckout({
      // session is created on create-checkout-session and pass throught checkoutSession
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="/images/advert2.png"
            alt="Advert"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon basket is empty."
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => {
              return (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <p2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="EUR" />
                </span>
              </p2>

              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
