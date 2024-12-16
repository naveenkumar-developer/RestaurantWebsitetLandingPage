import pastaImg from "../IMAGES/categoriesimg2.png";
import noticeImg from "../IMAGES/notice.png";
import "../assets/styles/LatestNews.css"
function LatestNews(){
    return(
        <>
        <section className="latestNews">
            <h2 className="latestNews_title">Our Latest Foods <strong style={{color: "#ff002b"}}>News</strong> </h2>
            <p className="latestNews_introPara">
            Discover the newest additions to our menu and exciting food trends we’re embracing! Stay tuned for updates on special dishes, offers, <br/> and events you won’t want to miss.</p>
            <div className="latestNews_container">
                <div className="latestNews_foodCard">
                    <img src={pastaImg} className="newItem" alt="food" />
                    <h3 className="foodTitle_latestNews">Pasta</h3>
                    <p className="foodDescription_latestNews">Introducing our delicious new pasta, crafted with authentic flavors and fresh ingredients! From creamy Alfredo to rich marinara, each dish is made to perfection, offering a satisfying blend of taste and texture. Whether you prefer classic spaghetti or indulgent stuffed ravioli, our new pasta selection promises to delight every palate. Come and savor the comfort of homemade pasta, now available at <strong className="title">The <span style={{color:"#ff002b", fontWeight:800}}>Food</span>  Loft</strong>!</p>
                    <a href="#" className="readMore_latestNews">Read More</a>
                </div>
                <div className="latestNews_description">
                    <div className="imgAndTitle_container">

                    <img src={noticeImg} alt="notice img" />
                    <h2 className="latestNews_description_title">Notice!</h2>
                    </div>
                    
                    <p className="latestNews_descriptionPara">
                    Stay updated with the latest food trends, new menu additions, and special offers at <strong className="title">The <span style={{color:"#ff002b", fontWeight:800}}>Food</span>  Loft</strong>! From seasonal dishes to exclusive chef creations, we’re always bringing fresh and exciting flavors to the table. Check back regularly for updates and be the first to discover what’s cooking in our kitchen. Don’t miss out on upcoming events, food festivals, and more delicious surprises!</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default LatestNews;