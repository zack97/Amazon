import React from "react";
import "../css/Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket :", basket);

  const addToBasket = () => {
    //dispatch the item  into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
        <div className="img-btn">
          <img src={image} alt="" />

          <button onClick={addToBasket}>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
