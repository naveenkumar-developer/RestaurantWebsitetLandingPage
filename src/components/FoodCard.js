import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddIcon from '@mui/icons-material/Add';
import "../assets/styles/FoodCard.css"
function FoodCard({id, imgUrl, foodName, discountInfo, price}){
    return (
        <>
    
        <div className="FoodCard" data-key={id}>
            <div className="likeBtn">
                <FavoriteBorderIcon />
            </div>
            <div className='foodImg_container'>
            <img className='foodImg' src={imgUrl} alt="FoodImg" />
            </div>
            <div className='foodInfo'>

            <div className='starIcon_container'>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
            </div>
            <h2 className='foodTitle'>{foodName}</h2>
            <p>{discountInfo}</p>
            <div className='foodPrice'>{price}</div>
            <button type='button' className='addToCartBtn'> <AddIcon />Add to Cart</button>
            </div>
       
       </div>
        </>
    )
}

export default FoodCard;