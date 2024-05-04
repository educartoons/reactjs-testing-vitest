import { useState } from "react";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

type Product = {
  title: string;
  price: number;
  image: string;
  colors: number;
};

type ProductPreview = {
  product: Product;
};

export default function ProductPreview({ product }: ProductPreview) {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className="max-w-xs relative">
      <div className="absolute top-3 right-3">
        <button onClick={handleLike}>
          {like ? (
            <HeartIconSolid data-testid="heart-solid" />
          ) : (
            <HeartIconOutline data-testid="heart-outline" />
          )}
        </button>
      </div>
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <div>
        <input type="text" />
      </div>
    </div>
  );
}
