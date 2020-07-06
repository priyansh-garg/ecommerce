import React from "react";
import {Link} from "react-router-dom";
import "./header.styles.scss";
import {auth} from "../../firebase/firebase.util";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { connect } from "react-redux";
import  CartIcon  from "../cart-icon/cart-icon.component";
import  CartDropdown  from "../cart-dropdown/cart-dropdown.component";

const Header=({user,hidden})=>(
    <div className="header">
        <Link to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                user?
                <div className="option" onClick={()=>auth.signOut()} >SIGN OUT</div>
                :
                <Link to="/authenticate"> SIGN IN</Link>
            }
            <CartIcon />
            {hidden?
                null:
            <CartDropdown/>
            }
        </div>
    </div>
);

const mapStateToProps=(state)=>({
    user:state.user.currentUser,
    hidden:state.cart.hidden

});

export default connect(mapStateToProps)(Header);