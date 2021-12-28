module.exports = {
  // to use images with next/images you must allow the domain where those images comes from
  images: {
    domains: ["fakestoreapi.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
