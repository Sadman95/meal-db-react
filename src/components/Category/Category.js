import React from 'react';
import { addToDb, removeFromDb } from '../Storage/Storage';
import "./Category.css";


const Category = (props) => {
    // console.log(props)
    const {img, category, id} = props;
    const handleAdd = (category) =>{
        addToDb(category);
    }
    const handleRemove = (category) =>{
        removeFromDb(category);
    }
    return (
        <div className="mealStyle">
            <p>{id}</p>
            <img src={img} alt="" />
            <h3>{category}</h3>
            <button onClick={() => handleAdd(category)} className="btn btn-primary">Add to cart</button>
            <button onClick={() => handleRemove(category)} className="btn btn-danger ms-1">Remove</button>
        </div>
    );
};

export default Category;