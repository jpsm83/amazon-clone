import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
        {/* product feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

// user make a request to see all the products to the server
// we fetch that data (all the products) and pre-render with all its information
// them page comes back to user fully rendered
// that is called server side render
export async function getServerSideProps(context) {

  // we use getSession() insted of "session" because here we are working with backend
  // getServerSideProps is a nextjs building method that works on backend - node
  // useSession is a hook used only in the front end
  const session = await getSession(context)
  // GET >>> all products from https://fakestoreapi.com/products
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      // those are the products we got from the server and pre-render
      // server side render
      // them we pass it to our Home component as props
      products,
      session
    },
  };
}
