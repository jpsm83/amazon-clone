import { getSession, useSession } from "next-auth/client";
import Header from "../../components/Header";
import moment from "moment";
import db from "../../../firebaseClient";
import Order from "../../components/Order";

// props orders are got from the function getServerSideProps() on the botton of the page
// that is a pre-render info from all the user orders info
function Orders({ orders }) {
  // session comes from next-Auth/client in the AuthProvider component at app.js
  // it wraps all our application allowing us to use at any other component
  const [session] = useSession();

  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your orders
        </h1>

        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4">
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }, i) => (
              <Order
                key={id + i}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default Orders;

// user make a request (order) to the server
// we fetch that data (itens bouth in that order) and pre-render with all its information
// them page comes back to user fully rendered
// that is called server side render
export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // get the users logged in credentials...
  // we use getSession() insted of "session" because here we are working with backend
  // getServerSideProps is a nextjs building method that works on backend - node
  // useSession is a hook used only in the front end
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  // db cames from firebase.js
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  // Stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      // those are the orders we got from the server and pre-render
      // server side render
      // them we pass it to our Order component as props
      orders,
    },
  };
}
