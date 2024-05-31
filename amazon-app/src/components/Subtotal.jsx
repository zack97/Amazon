import React from "react";
import { useIntl } from "react-intl";
import "../css/Subtotal.css";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const intl = useIntl();
  const [{ basket }, dispatch] = useStateValue();

  const subtotal = basket?.reduce((total, item) => total + item.price, 0);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):
        <strong>
          {intl.formatNumber(subtotal, {
            style: "currency",
            currency: "EUR",
          })}
        </strong>
      </p>
      <small className="subtotal-gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
