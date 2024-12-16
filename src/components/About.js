import ComboImg from "../IMAGES/comboImg.png";
import "../assets/styles/About.css";
function About() {
  return (
    <>
      <section className="AboutUs">
        <div className="aboutUs_container">
          <div className="aboutUs_left">
            <img
              className="comboImg_about"
              src={ComboImg}
              alt="Food combo img"
            />
          </div>
          <div className="aboutUs_right">
            <h2 className="title">
              The{" "}
              <span style={{ color: "#ff002b", fontWeight: 800 }}>Food</span>{" "}
              Loft
            </h2>
            <p>
              At{" "}
              <strong>
                The{" "}
                <span style={{ color: "#ff002b", fontWeight: 800 }}>Food</span>{" "}
                Loft
              </strong>
              , we believe that great food brings people together. Our journey
              began with a passion for creating flavorful, homemade dishes
              inspired by diverse cuisines. Every meal we serve is crafted with
              love, using the finest ingredients to ensure freshness and
              quality. Our team is dedicated to providing a warm, welcoming
              atmosphere where guests can relax, enjoy, and create lasting
              memories.
            </p>
            <div className="btns_container_about">
              <button type="button" className="orderNowBtn_about">
                Order Now
              </button>
              <button type="button" className="readMoreBtn_about">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
