import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdnio.luscious.net/DatParakeet/370/lusciousnet_lusciousnet_16-9-1387043699438_1947818068.jpg"
          //src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* Product */}
          <Product
            id="101"
            title="Midweek Sport – February 16, 2021"
            price={29.99}
            image="https://adultmagazinespdf.com/wp-content/uploads/2021/02/Midweek_Sport_-_February_16_2021-241x300.jpg"
            rating={4}
          />
          {/* Product */}
          <Product
            id="102"
            title="Riche Magazine – Issue 94 February 2021"
            price={25.99}
            image="https://adultmagazinespdf.com/wp-content/uploads/2021/02/Riche_Magazine_-_Issue_94_February_2021-212x300.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="103"
            title="Brazil Sexotics Adult Photo Magazine – February 2021"
            price={19.99}
            image="https://adultmagazinespdf.com/wp-content/uploads/2021/02/Brazil_Sexotics_Adult_Photo_Magazine_-_February_2021-200x300.jpg"
            rating={2}
          />
          {/* Product */}
          <Product
            id="104"
            title="Sexy Uniform MILFs in Nylons Adult Photo Magazine – February 2021"
            price={35.99}
            image="https://adultmagazinespdf.com/wp-content/uploads/2021/02/Sexy_Uniform_MILFs_in_Nylons_Adult_Photo_Magazine_-_February_2021-200x300.jpg"
            rating={5}
          />
          {/* Product */}
          <Product
            id="105"
            title="Maxim México – Febrero 2021"
            price={39.99}
            image="https://adultmagazinespdf.com/wp-content/uploads/2021/02/Maxim_Mexico_-_Febrero_2021-229x300.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="106"
            title="Nuts – 20-26 Feb 2021"
            price={34.99}
            image="https://adultmagazinespdf.com/wp-content/uploads/2021/02/Nuts_-_20-26_April_2012-220x300.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
