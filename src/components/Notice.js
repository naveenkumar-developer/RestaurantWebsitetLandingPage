import NoticeImg from "../IMAGES/noticeImg.png"
import "../assets/styles/Notice.css"
function Notice(){
    return(
        <>
        <section className="NoticeSection">
            <div className="NoticeContainer">
                <div className="notice_left">
                        <h2 className="notice_left_title">Choose your favourite food</h2>
                        <p className="notice_left_para">
                        Choosing your favorite food is more than just about taste—it’s about the memories and comfort it brings. Whether it’s a hearty bowl of pasta, a sizzling slice of pizza, or a comforting home-cooked meal, your favorite food has the power to uplift your mood and make any moment special. It’s a personal delight that reflects your unique preferences and the joy of savoring something truly satisfying.
                        </p>
                </div>
                <div className="notice_center">
                       <img src={NoticeImg} alt="notice" />
                </div>
                <div className="notice_right">
                        <h2 className="notice_right_title">Order Online and Get Fast Delivery</h2>
                        <p className="notice_right_para">
                        Craving your favorite meal? Order online and enjoy fast, convenient delivery right to your doorstep! With just a few clicks, you can explore our menu, customize your order, and have fresh, delicious food delivered in no time. Whether it’s a quick lunch or a family feast, we’re here to make dining easy and hassle-free. Sit back, relax, and let us bring the flavors to you!
                        </p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Notice;