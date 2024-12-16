import phoneImg from "../IMAGES/phoneImg.png";
import mailImg from "../IMAGES/mailImg.png";
import locationImg from "../IMAGES/locationImg.png";
import "../assets/styles/Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="row1">
          <h2 className="footer_title">
            The <span style={{ color: "#ff002b"}}>Food</span>{" "}
            Loft
          </h2>
          <div className="inputTitleAndInput_wrapper">
            <div className="inputTitle_container">
              <h3 className="inputTitle_footer"> Subscription News</h3>
              <h4 className="subtitle_footer">
                Subscribe to the weekly updates.
              </h4>
            </div>
            <div className="inputGroup_footer">
              <input
                className="input_footer"
                placeholder="Enter Email Address"
                aria-label="emailForSubscription"
              />
              <button className="btn_footer" type="submit">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="row2">
          <div className="col1">
            <address>
              123 Flavor Street,
              <br /> Foodie Town,
              <br /> Culinary City,
              <br /> 45678.
            </address>
            <div className="bookTable">
              <h4>Book A Table</h4>
              <strong style={{ color: "#ff002b" }}>+97-555-555-5555</strong>
            </div>
            <div className="openingHours">
              <h4>Opening Hours</h4>
              <time style={{ color: "#ff002b" }}>08:AM - 12:00PM</time>
            </div>
          </div>
          <div className="col2">
            <h2>Quick Links</h2>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col3">
            <h2>Our Menu</h2>
            <nav>
              <ul>
                <li>
                  <a href="#">Burgers</a>
                </li>
                <li>
                  <a href="#">Pizza</a>
                </li>
                <li>
                  <a href="#">Pasta</a>
                </li>
                <li>
                  <a href="#">Cold Drinks</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col4">
            <h2>Get In Touch</h2>
            <nav>
              <ul>
                <li>
                <img src={locationImg} alt="location" />
                  <p>
                  
                    123 Flavor Street,
                    <br /> Foodie Town,
                    <br /> Culinary City,
                    <br /> 45678.
                  </p>
                </li>
                <li>
                <img src={phoneImg} alt="phone" />
                  <p>+97-555-555-5555</p>
                </li>
                <li>
                <img src={mailImg} alt="email" />
                  <p> thefoodloft@gmail.com</p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row3">
          <p className="copyrightInfo">
           &copy; Copyrights 2024 The <strong style={{ color: "#ff002b" }}>Food</strong>{" "}
            Loft
          </p>
          <div className="addtionalInfo">
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
