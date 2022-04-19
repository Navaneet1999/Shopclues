import './navbar.css'
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <div>
            <div id='top'>
                <p>Sell With Us | </p>
                <p>Call Us | </p>
                <p>Download App: </p><AppleIcon/><AndroidIcon/>
            </div>
            <div id='nav_p'>
                <div>
                    <img src="https://images.shopclues.com/images/ui/shopclues_logo@2x.png" alt=""/>
                </div>
                <div className='join'>
                    <SearchIcon/>
                    <input
                        type="text"
                        name=""
                        id="Search"
                        placeholder="What is on your mind today?"
                    />
                    <button id='btn'>Search</button>
                </div>
                <div id='nav_c'>
                    <div id='icn'><LocationOnIcon/></div>
                    <div id='icn'><NotificationsIcon/></div>
                    <div id='icn'><FavoriteIcon/></div>
                    <div id='icn'><ShoppingCartIcon/></div>
                    <div ><a href="" id='icnaa'>Sign In</a></div>
                </div>
            </div>
            <div id='nav_t'>
                <div>
                    <img id='navimg' src='https://images.shopclues.com/images/ui/madeinindia.png' alt='' />
                </div>
                <button  id='btn1'>Mobiles & more</button>
                
                <button  id='btn1'>Men</button>
                <button  id='btn1'>Women</button>
                <button  id='btn1'>Home & Kitchen</button>
                <button  id='btn1'>Appliances</button>
                <button  id='btn1'>Sports & More</button>
                <button id='btn1'>Essentials</button>
                <button id='btn1'>Offers</button>
                <button id='btn1'>Global Shopping</button>
            </div>
        </div>
    )
}