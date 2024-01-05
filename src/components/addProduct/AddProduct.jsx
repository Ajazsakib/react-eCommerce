import React, { useState } from "react";
import addProductStyle from "./addProduct.module.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productSlice";
const AddProduct = () =>
{
    const [state, setState] = useState({
        title: "",
        picture: "",
        description: "",
        price: null,
        rating: null
    })

    const navigate = useNavigate();
    const dispatch = useDispatch()


    const handleChange = (e) =>
    {
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = () =>
    {
        console.log(state)
        dispatch(addProduct(state))
        setState({
            ...state,
            title: "",
            picture: "",
            description: "",
            price: "",
            rating: "",
        })
        toast.success('Product Added successfully!', {
            position: 'top-right',
            autoClose: 2000, // Set the time (in milliseconds) the toast should be displayed
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        navigate("/")
    }

    return (
        <div className={addProductStyle.addProduct}>
            <ToastContainer />
            <div className={addProductStyle.addProductBox}>
                <h3>Add a product</h3>
                <div className={addProductStyle.formGroup}>
                    <label>Name</label>
                    <input type="text" className={addProductStyle.formControl} name="title" value={state.title} onChange={handleChange} />
                </div>
                <div className={addProductStyle.formGroup}>
                    <label>Image URL</label>
                    <input type="text" className={addProductStyle.formControl} name="picture" value={state.picture} onChange={handleChange} />
                </div>
                <div className={addProductStyle.formGroup}>
                    <label>Description</label>
                    <input type="text" className={addProductStyle.formControl} name="description" value={state.description} onChange={handleChange} />
                </div>
                <div className={addProductStyle.formGroup}>
                    <label>Price</label>
                    <input type="text" className={addProductStyle.formControl} name="price" value={state.price} onChange={handleChange} />
                </div>
                <div className={addProductStyle.formGroup}>
                    <label>Rating</label>
                    <input type="number" className={addProductStyle.formControl} name="rating" value={state.rating} onChange={handleChange} />
                </div>
                <div className={addProductStyle.submit}>
                    <button onClick={handleSubmit}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;