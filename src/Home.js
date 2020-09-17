import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Grand Theft Auto V (PS4)"
            price={1714}
            rating={5}
            image="https://m.media-amazon.com/images/I/916T5H6sCtL._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="ASUS ROG Zephyrus M15 (2020), 15.6 4K UHD, Intel Core i7-10750H 10th Gen, RTX 2060 GDDR6 6GB Graphics, Gaming Laptop (16GB RAM/1TB NVMe SSD/Windows 10/Prism Black/1.9 Kg), GU502LV-HC018T"
            price={154990}
            rating={4}
            image="https://m.media-amazon.com/images/I/81o5wifrczL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Razer DeathAdder Elite - Ergonomic Wired Optical Mouse Gaming Mouse (USB, Black) RZ01-02010100-R3A1"
            price={11110}
            rating={3}
            image="https://m.media-amazon.com/images/I/71-QPWNH+VL._AC_UY218_.jpg" />

          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="HyperX Cloud Stinger Gaming Headset (Black)"
            price={4690}
            rating={4}
            image="https://m.media-amazon.com/images/I/61bVcEoMx3L._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
