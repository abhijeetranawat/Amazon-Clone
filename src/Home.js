import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro_Max/Available_Now/Per_Daycallout/TallHero_1500X600_1._CB405352815_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="34"
            title="Samsung Galaxy M31s (Mirage Blue, 6GB RAM, 128GB Storage)"
            price={19499}
            image="https://images-na.ssl-images-amazon.com/images/I/61d-phh4GfL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="234"
            title="Canon PowerShot SX430 IS 20MP Digital Camera with 45x Optical Zoom"
            price={16499}
            image="https://images-na.ssl-images-amazon.com/images/I/61fdH0yoBJL._SL1000_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="Bose Portable Home Speaker — with Alexa Voice"
            price={31500}
            image="https://images-na.ssl-images-amazon.com/images/I/71G6Vkcl%2BWL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="12"
            title="Mi 20000mAH Li-Polymer Power Bank 2i with 18W Fast
          Charging"
            price={1599}
            image="https://images-na.ssl-images-amazon.com/images/I/61kYwX%2BwKdL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="123"
            title="Voodania Fecibial Official, Football Size 5"
            price={699}
            image="https://images-na.ssl-images-amazon.com/images/I/71BK3SQ%2BHeL._SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="1234"
            title="Samsung 163 cm (65 inches) 4K Ultra HD Smart LED TV UA65TU8000KXXL (Black) (2020 Model)"
            price={123300}
            image="https://images-na.ssl-images-amazon.com/images/I/917QAUQorDL._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="12345"
            title="Lenovo Casual Laptop Backpack 15.6 inch"
            price={794}
            image="https://images-na.ssl-images-amazon.com/images/I/71uMciapNnL._SL1000_.jpg"
            rating={4}
          />
          <Product
            id="123456"
            title="Skybags Polycarbonate Hard Trolley Bag"
            price={5700}
            image="https://images-na.ssl-images-amazon.com/images/I/714bdCoRLYL._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="1234567"
            title="Sony HT-Z9F Cinematic 5.1Ch Soundbar and Wireless Surround Speakers (SA- Z9R) with Dolby Atmos and High Res Sound (Wireless Subwoofer, Bluetooth Connectivity,    Built-in Wi-Fi)"
            price={21990}
            image="https://images-na.ssl-images-amazon.com/images/I/71aE0meVZkL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
