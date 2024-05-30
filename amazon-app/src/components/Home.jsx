import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />

        <div className="home-row">
          <Product
            id="49538094"
            title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538095"
            title="Kenwood kMix Stand for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://image.coolblue.be/max/500x500/products/1505608"
          />
        </div>

        <div className="home-row">
          <Product
            id="49538096"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SY466_.jpg"
          />
          <Product
            id="49538097"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="49538098"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="49538099"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor -Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX385_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
