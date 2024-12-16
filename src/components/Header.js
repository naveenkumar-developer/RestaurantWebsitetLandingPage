import logo from "../IMAGES/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import "../assets/styles/Header.css";
function Header(){
    return (
       <>
       <header>
        <section className="firstHeader">
            <div className="shopTime">
                <span>MON-FRI <time>8am to 11pm</time></span>
                <span>SAT-SUN <time>8am to 12pm</time></span>
            </div>
          
                <nav className="firstHeader_nav">
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Login/Register</a></li>
                    </ul>
                </nav>
        
        </section>
        <section className="secondHeader">
            <div className="logo_title_container">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="title">The <span style={{color:"#ff002b", fontWeight:800}}>Food</span>  Loft</h1>
            </div>
            <nav className="secondHeader_nav">
                <ul>
                    <li><a href="#" >Home</a></li>
                    <li><a href="#" >Menu</a></li> 
                    <li><a href="#" >Order Food</a></li> 
                    <li><a href="#" >Call for order</a></li>
                    <li><a href="#">Order Online</a></li>
                </ul>
            </nav>
            <div className="menuIcon">
            <MenuIcon />
            </div>
        </section>
       </header>
       </>
    )
}

export default Header;