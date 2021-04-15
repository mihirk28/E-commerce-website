import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://c.wallhere.com/photos/2f/00/food_Fries_burger_meat_salad-1952639.jpg!d"
          alt=""
        />

        <div className="home__row">
          {/* Product */}
          <Product
            id="101"
            title="Beef Burger"
            price={14.99}
            image="https://i2.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/520765216/classic-beef-burger.jpg?resize=640%2C468&ssl=1"
          />
          {/* Product */}
          <Product
            id="102"
            title="Turkey Burger"
            price={14.99}
            image="https://i2.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/184168996/turkey-burger.jpg?resize=640%2C468&ssl=1"
          />
          {/* Product */}
          <Product
            id="103"
            title="Veggie Burger"
            price={13.99}
            image="https://i1.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/351400125/pumpkin-veggie-burger.jpg?resize=640%2C468&ssl=1"
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="104"
            title="Bison Burger"
            price={12.99}
            image="https://i1.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/962584472/bison-burgers.jpg?resize=640%2C468&ssl=1"
          />
          {/* Product */}
          <Product
            id="105"
            title="Wild Salmon Burger"
            price={9.99}
            image="https://i2.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/148632216/salmon-burger.jpg?resize=640%2C468&ssl=1"
          />
          {/* Product */}
          <Product
            id="106"
            title="Black Bean Burger"
            price={11.99}
            image="https://i0.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/534225686/veggie-burger.jpg?resize=640%2C468&ssl=1"
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="107"
            title="Coke & Pepsi"
            price={4.99}
            image="https://content.fortune.com/wp-content/uploads/2015/08/cokevspepsi.jpg"
          />
          {/* Product */}
          <Product
            id="108"
            title="French Fries"
            price={9.99}
            image="https://foodquests.com/wp-content/uploads/2020/08/veggie-works-493x400.png"
          />
          {/* Product */}
          <Product
            id="109"
            title="Chicken Nuggets"
            price={11.99}
            image="https://static.toiimg.com/thumb/msid-69476717,imgsize-266835,width-800,height-600,resizemode-75/69476717.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
