import CategoriesImg1 from "../IMAGES/categoriesimg1.png";
import CategoriesImg2 from "../IMAGES/categoriesimg2.png";
import CategoriesImg3 from "../IMAGES/categoriesimg3.png";
import CategoriesImg4 from "../IMAGES/categoriesimg4.png";
import CategoriesImg5 from "../IMAGES/categoriesimg5.png";
import "../assets/styles/Categories.css"
function Categories(){
    const CategoriesObj=[
        {
            img:CategoriesImg1,
            title:"Frech fry"
        },
        {
            img:CategoriesImg2,
            title:"Pasta"
        },
        {
            img:CategoriesImg3,
            title:"Sandwich"
        },
        {
            img:CategoriesImg4,
            title:"Cold Drinks"
        },
        {
            img:CategoriesImg5,
            title:"Burger"
        }
    ]
    const categoriesItems=CategoriesObj.map( (item, index) => (
        <li className="CategoriesList" key={index}>
            <img className="CategoriesImg" src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
        </li>
    ))
    return(
        <>
        <div className="Categories_container">

        <ul>{categoriesItems}</ul>
        </div>
        </>
    )
}

export default Categories;