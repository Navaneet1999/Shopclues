import './navbar.css'
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
                    <button>Search</button>
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
                    <img src='https://images.shopclues.com/images/ui/madeinindia.png' alt='' />
                </div>
                <div>Mobiles & more</div>
                <div>Men</div>
                <div>Women</div>
                <div>Home & Kitchen</div>
                <div>Appliances</div>
                <div>Sports & More</div>
                <div>Essentials</div>
                <div>Offers</div>
                <div>Global Shopping</div>
            </div>
        </div>
    )
}