import firstBannerImage1 from "../IMAGES/firstBanner_png.png";
import firstBannerImage2 from "../IMAGES/firstBanner1.png";
import firstBannerImage4 from "../IMAGES/firstBanner3.png";
import firstBannerImage5 from "../IMAGES/firstBanner4.png";
import "../assets/styles/Main.css";
import Categories from "../components/Categories.js";
import About from "../components/About.js";
import Notice from "./Notice.js";
import Products from "./Products";
import Feedback from "./Feedback.js";
import LatestNews from "./LatestNews";
function Main() {
  return (
    <>
      <section className="firstBanner">
        <div className="firstBanner_container">
          <div className="firstBanner_introPara">
            <h1 className="title">
              {" "}
              Welcome to The{" "}
              <span style={{ color: "#ff002b", fontWeight: 800 }}>
                Food
              </span>{" "}
              Loft!
            </h1>
            <p>
              Discover a world of delicious flavors and exceptional dining
              experiences at{" "}
              <span className="title">
                The{" "}
                <span style={{ color: "#ff002b", fontWeight: 800 }}>Food</span>{" "}
                Loft!
              </span>
              . Whether you're craving traditional favorites or exploring new
              culinary delights, our carefully curated menu promises something
              for everyone. We take pride in using the freshest ingredients,
              crafting each dish with passion and precision. Join us for a
              memorable meal, warm ambiance, and outstanding service that will
              leave you coming back for more.
            </p>
            <button type="button" className="orderNowBtn_firstBanner">
              Order Now
            </button>
          </div>
          <img className="img1" src={firstBannerImage1} alt="First Banner" />
          <img className="img2" src={firstBannerImage2} alt="First Banner" />

          <img className="img4" src={firstBannerImage4} alt="First Banner" />
          <img className="img5" src={firstBannerImage5} alt="First Banner" />
        </div>
      </section>
      <Categories />
      <About />
      <Notice />
      <Products />
      <Feedback />
      <LatestNews />
    </>
  );
}

export default Main;
