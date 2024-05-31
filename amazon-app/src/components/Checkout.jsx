import React from "react";
import { IntlProvider } from "react-intl"; // Import IntlProvider
import "../css/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
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
            <h2 className="checkout-title">
              <CheckoutProduct />
            </h2>
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
