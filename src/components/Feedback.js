import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import pizzaImg from "../IMAGES/pizza01.png";
import "../assets/styles/Feedback.css";
function Feedback() {
  return (
    <>
      <section className="feedback">
      <h2 className="feedback_title">Our Customer <span style={{color: "#ff002b"}}>Feedbacks</span> </h2>
          <p className="feedback_introPara">
            See what our customers are saying about their dining experience with
            us! Their feedback inspires us to deliver even better <br /> food and
            service every day.
          </p>
        <div className="feedback_cards_container">
        
          <div className="feedback_card">
            <div className="ratingsIcons_container">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarHalfIcon />
            </div>
            <p className="feedback_para">
              "The food was absolutely delicious, and the service was top-notch!
              I loved the cozy ambiance, and everything was served fresh and on
              time. I can't wait to come back!".
            </p>
            <h3 className="customer_name">John wick</h3>
            <img className="feedbackImg" src={pizzaImg} alt="pizza" />
          </div>
          <div className="feedback_card">
            <div className="ratingsIcons_container">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarHalfIcon />
            </div>
            <p className="feedback_para">
            "A fantastic dining experience! The menu had a great variety, and every dish we tried was bursting with flavor. Friendly staff and quick service made it even better."
            </p>
            <h3 className="customer_name">Lilly</h3>
            <img className="feedbackImg" src={pizzaImg} alt="pizza" />
          </div>
        </div>
      

      </section>
    </>
  );
}

export default Feedback;
