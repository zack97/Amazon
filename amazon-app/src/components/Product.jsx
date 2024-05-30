import React from "react";
import "../css/Product.css";
import StarIcon from "@mui/icons-material/Star";

function Product({ title, image, price, rating }) {
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

          <button>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
