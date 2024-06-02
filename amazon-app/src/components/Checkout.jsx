import React from "react";
import { IntlProvider } from "react-intl"; // Import IntlProvider
import "../css/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <IntlProvider locale="en">
      <div className="checkout">
        <div className="checkout-left">
          <img
            className="checkout-ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <div>
            <h3> {user ? `Hello ${user?.email}` : ""}</h3>
            <h2 className="checkout-title">Your shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
    </IntlProvider>
  );
}

export default Checkout;
