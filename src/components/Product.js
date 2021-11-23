import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(Math.floor(Math.random() * 5));

  const stars = [];
  for (let i=0; i<rating; i++) {
      stars.push(<StarIcon className="h-5" />)
  }

  return (
    <div>
      <p>{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4>{title}</h4>

      <div className="flex">
        {stars}
      </div>
    </div>
  );
}

export default Product;
