import "../assets/styles/Product.css";
import FoodCard from "./FoodCard";
import CategoriesImg1 from "../IMAGES/categoriesimg1.png";
import CategoriesImg2 from "../IMAGES/categoriesimg2.png";
import CategoriesImg3 from "../IMAGES/categoriesimg3.png";
import CategoriesImg4 from "../IMAGES/categoriesimg4.png";
import CategoriesImg5 from "../IMAGES/categoriesimg5.png";
import BurgersCombo from "../IMAGES/BurgersCombo.png";
import combo1 from "../IMAGES/combo1.png";
import shawarma from "../IMAGES/shawarma.png";
function Products() {
    const foodsList=[
        {id:1, imgUrl:CategoriesImg1, foodName:"Spicy Burger", discountInfo:"Get 10% Discount On first Order", price:"$12.99"},
        {id:2, imgUrl:CategoriesImg2, foodName:"French Fries", discountInfo:"Get 10% Discount On first Order", price:"$12.99"},
        {id:3, imgUrl:CategoriesImg3, foodName:"Sandwich", discountInfo:"Get 10% Discount On first Order", price:"$12.99"},
        {id:4, imgUrl:CategoriesImg4, foodName:"Cold Drinks", discountInfo:"Get 10% Discount On first Order", price:"$12.99"},
        {id:5, imgUrl:CategoriesImg5, foodName:"Combo", discountInfo:"Get 10% Discount On first Order", price:"$12.99"},
        {id:6, imgUrl:BurgersCombo, foodName:"Burgers Combo", discountInfo:"Get 10% Discount On first Order", price:"$12.99"},
        {id:7, imgUrl:combo1, foodName:"Combo1", discountInfo:"Get 10% Discount On first Order", price:"$12.99"},
        {id:8, imgUrl:shawarma, foodName:"Shawarma", discountInfo:"Get 10% Discount On first Order", price:"$12.99"},
    ]
  return (
    <>
      <section className="products">
        <div className="products_header">
          <h2>
            Our Popular Tasty <span style={{ color: "#ff002b" }}>Foods</span>{" "}
          </h2>
          <p>
            Explore our most loved dishes crafted with fresh ingredients and
            bold flavors. From savory delights to sweet treats,
            <br /> these favorites are sure to satisfy every craving!
          </p>
        </div>
        <nav className="products_nav">
          <ul>
            <li>
              <a href="#" className="active">
                All Food
              </a>
            </li>
            <li>
              <a href="#">Burger</a>
            </li>
            <li>
              <a href="#">Pasta</a>
            </li>
            <li>
              <a href="#">Pizza</a>
            </li>
            <li>
              <a href="#">Sandwich</a>
            </li>
            <li>
              <a href="#">Cold Drinks</a>
            </li>
            <li>
              <a href="#">combo</a>
            </li>
          </ul>
        </nav>
     <div className="foodCards_container">
      {
        foodsList.map( (item)=>(
          <FoodCard key={item.id} {...item} />
        ))
      }
      </div>
      <button type="button" className="viewAllProductsBtn">View All Products</button>
      </section>
   

    </>
  );
}

export default Products;
