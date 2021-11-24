import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<StarIcon className="h-5 text-yellow-500" />);
  }

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    // push item into REDUX
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // remove the item from REDUX
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        objectFit="contain"
      />
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex">{stars}</div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="EUR" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              loading="lazy"
              src="/images/prime.png"
              alt="Prime"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col my-auto space-y-2 justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
