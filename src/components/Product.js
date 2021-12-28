// REDUX => create global states that can be access by any component without props drilling
// because it has lots of boylerplate, it is only used in large projects

import { useState } from "react";

// to use images with next/images you must allow the domain where those images comes from at next.config.js
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

function Product({ id, title, price, description, category, image }) {

  // dispatch is used by redux to execute an action
  // in this project, actions are comming from basket
  const dispatch = useDispatch();

  const [rating] = useState(Math.floor(Math.random() * 5));
  const [hasPrime] = useState(Math.random() < 0.5);

  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<StarIcon className="h-5 text-yellow-500" />);
  };

  const addItemToBasket = () => {
    const product = {
      id, title, price, description, category, image, rating, hasPrime
    }
    // dispatch execute a action and send it to REDUX store... the basket slice
    dispatch(addToBasket(product))
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">{stars}</div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="EUR" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 mt-5">
          <img className="w-12" src="/images/prime.png" alt="Prime" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={() => addItemToBasket()} className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
