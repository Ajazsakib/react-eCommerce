import React from "react";
import cartStyle from "./cartStyle.module.css";
import { useSelector } from "react-redux";
const Cart = () =>
{
    const cartItems = useSelector((state) =>
    {
        return state.cartReducer.carts
    })
    return (
        <div className={cartStyle.mainCart}>
            {
                cartItems && cartItems.map((item) =>
                {
                    return (
                        <div className={cartStyle.cartItem}>
                            <div className={cartStyle.img}>
                                <img src={item.picture} />
                            </div>
                            <div className={cartStyle.details}>
                                <div className={cartStyle.title}>{item.title}</div>
                                <div className={cartStyle.price}>Rs.{item.price}</div>
                            </div>
                            <div className={cartStyle.ratingStar}>

                                {
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <img
                                            key={index}
                                            src={index < item.rating ? "images/star1.png" : "images/star.png"}
                                            alt="rating"
                                        />
                                    ))
                                }


                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Cart;