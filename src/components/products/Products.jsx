import React, { useState } from "react";
import productStyle from "./products.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { editProduct, editAction, editProductCancel, updateProduct, sortByPrice, removeSorting, deleteProduct } from "../../redux/productSlice";
import { addToCart } from "../../redux/cartSlice";
const Products = () =>
{
    const [isSorted, setIsSorted] = useState(false);

    const productsState = useSelector((state) =>
    {
        return state.productReducer.products
    })
    const [beforeEdit, setBeforeEdit] = useState(productsState)
    const originalProducts = productsState;

    const dispatch = useDispatch()


    const handleChange = (e, id) =>
    {
        const { name, value } = e.target;

        dispatch(editProduct({ id, name, value }))
    }

    const handleEditProduct = (id) =>
    {

        setBeforeEdit(productsState)
        dispatch(editAction(id))
    }

    const editCancel = (id) =>
    {

        const findCancelEdit = beforeEdit.find((item) =>
        {
            return item.id === id
        })

        dispatch(editProductCancel({ id, findCancelEdit }))
    }

    const handleUpdate = (id) =>
    {

        dispatch(updateProduct(id))
        // Show success toast
        toast.success('Product Updated successfully!', {
            position: 'top-right',
            autoClose: 2000, // Set the time (in milliseconds) the toast should be displayed
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }


    const handleDeleteProduct = (id) =>
    {
        // const updatedProducts = products.filter((item) =>
        // {
        //     return item.id !== id
        // })


        // setProducts(updatedProducts)
        dispatch(deleteProduct(id))
        // Show success toast
        toast.success('Product Deletion successfully!', {
            position: 'top-right',
            autoClose: 2000, // Set the time (in milliseconds) the toast should be displayed
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }


    const handleSortByPrice = () =>
    {
        // Sort products by price
        const sortedProducts = [...productsState].sort((a, b) => a.price - b.price);
        dispatch(sortByPrice(sortedProducts))
        toast.success("Products sorted by price!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        setIsSorted(true)
    };

    const handleRemoveSorting = (e) =>
    {
        // Revert to the original order
        e.stopPropagation()
        dispatch(removeSorting(originalProducts))
        toast.success("Sorting removed!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        setIsSorted(false)
    };

    const handleAddToCart = (item) =>
    {
        dispatch(addToCart(item))
        toast.success("Item Added To Cart !", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }


    return (
        <div className={productStyle.products}>
            <div className={productStyle.sortBtn}>
                <button onClick={handleSortByPrice}>Sort By Price{isSorted && <span class="material-symbols-outlined" onClick={handleRemoveSorting}>
                    close
                </span>} </button>
            </div>
            <ToastContainer />
            {
                productsState && productsState.map((item) =>
                {
                    return (
                        <div className={productStyle.productBox}>
                            <div className={productStyle.left}>
                                <div className={productStyle.img}>
                                    <img src={item.picture} alt={item.picture} />
                                </div>
                                <div className={productStyle.details}>
                                    <div className="titleAndPriice">
                                        <input type="text" name="title" className={productStyle.title} value={item.title} style={{
                                            pointerEvents: item.isEdit ? "auto" : "none",
                                            border: item.isEdit ? "1px solid black" : "0",
                                        }} onChange={(e) =>
                                        {
                                            handleChange(e, item.id)
                                        }} />
                                        <br />
                                        <span className={productStyle.currencyPrefix}>Rs.</span><input type="text" className={productStyle.price} value={item.price} style={{
                                            pointerEvents: item.isEdit ? "auto" : "none",
                                            border: item.isEdit ? "1px solid black" : "0",
                                        }} name="price" onChange={(e) =>
                                        {
                                            handleChange(e, item.id)
                                        }} />
                                    </div>
                                    <div className={productStyle.rating}>
                                        {
                                            item.isEdit ? <input type="number" value={item.rating} name="rating" onChange={(e) =>
                                            {
                                                handleChange(e, item.id)
                                            }} /> :
                                                <div className={productStyle.ratingStar}>

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
                                        }


                                    </div>
                                </div>
                            </div>
                            <div className={productStyle.right}>
                                <div className={productStyle.description}>
                                    {
                                        item.isEdit ? <textarea rows="5" cols="50" value={item.description} name="description" onChange={(e) =>
                                        {
                                            handleChange(e, item.id)
                                        }}></textarea> : <p>{item.description}</p>
                                    }
                                    {/* <textarea rows="4" cols="30" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ipsa ex nostrum. Consequatur corporis, aperiam sed nesciunt ad odit a."></textarea> */}

                                </div>
                                <div className={productStyle.action}>
                                    <div className={productStyle.left}>
                                        {
                                            !item.isEdit && <button className={productStyle.addToCart} onClick={() =>
                                            {
                                                handleAddToCart(item)
                                            }}>Add To Cart</button>
                                        }

                                    </div>
                                    <div className={productStyle.right}>
                                        {
                                            item.isEdit ? <><button onClick={() =>
                                            {
                                                editCancel(item.id)
                                            }}>Cancel</button><button onClick={() =>
                                            {
                                                handleUpdate(item.id)
                                            }}>Submit</button></> : <><span className={`material-symbols-outlined ${productStyle.edit}`} onClick={() =>
                                            {
                                                handleEditProduct(item.id)
                                            }}>
                                                edit
                                            </span>
                                                <span className={`material-symbols-outlined ${productStyle.delete}`} onClick={() =>
                                                {
                                                    handleDeleteProduct(item.id)
                                                }}>
                                                    delete
                                                </span></>
                                        }

                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Products