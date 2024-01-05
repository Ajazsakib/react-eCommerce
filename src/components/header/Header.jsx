import React from "react";
import HeaderStyle from "./header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () =>
{
    const cartItemCount = useSelector((state) =>
    {
        return state.cartReducer.carts.length
    })
    return (
        <div className={HeaderStyle.header}>
            <div className={HeaderStyle.left}>
                <ul>
                    <li><Link to="/" className={HeaderStyle.logo}>eCommerce</Link></li>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/addProduct">Add a Product<span class="material-symbols-outlined">
                        add
                    </span></Link></li>
                </ul>
            </div>
            <div className={HeaderStyle.right}>
                <ul>
                    <li><Link to="/cart"><span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                        {
                            cartItemCount > 0 && <span className={HeaderStyle.cartCount}>{cartItemCount}</span>
                        }
                    </Link></li>
                    <li><a href="#">
                        <span className="username">Hi...</span>
                        <span className="usericon"><span class="material-symbols-outlined">
                            person
                        </span></span>
                    </a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;