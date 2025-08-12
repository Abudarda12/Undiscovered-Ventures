import React from "react";
import "../style/product.css";

const Product = () => {
  return (
    <section className="our-product">
      <h2 className="section-title">Our Product</h2>
      <p className="section-desc">
        We also have a bunch of products and deliverables which can enhance your
        boardrooms & office rooms and can also be used for branding and corporate
        gifting.
      </p>

      <div className="product-layout">
        {/* Left List */}
        <ul className="product-list">
          <li>Magazine</li>
          <li>Wall Frames</li>
          <li>Coffee Mugs</li>
          <li>Coffee Table Book</li>
          <li>Corporate Gifts</li>
          <li>Calendar & Wooden Calendar</li>
          <li>Dairy & Wooden Dairy</li>
        </ul>

        {/* Right Grid */}
        <div className="product-grid">
          <div className="product-card">
            <h4>Calendar</h4>
            <img
              src="/images/p1.jpg"
              alt="Calendar"
            />
          </div>
          <div className="product-card">
            <h4>Dairy</h4>
            <img
              src="/images/p2.jpg"
              alt="Diary"
            />
          </div>
          <div className="product-card">
            <h4>Coffee Table Book</h4>
            <img
              src="/images/p3.jpg"
              alt="Coffee Table Book"
            height={"200px"}/>
          </div>
          <div className="product-card">
            <h4>Magazines</h4>
            <img
              src="/images/p4.jpg"
              alt="Magazines"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;