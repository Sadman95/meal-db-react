import React from 'react';
import "./Category.css";


const Category = (props) => {
    // console.log(props.handleAdd)
    const {img, category, id} = props;
  
    return (
        <div className="mealStyle">
            <p>{id}</p>
            <img src={img} alt="" />
            <h3>{category}</h3>
            <button onClick={() => props.handleAdd(props)} className="btn btn-primary">Add to cart</button>
            <button onClick={() => props.handleRemove(props)} className="btn btn-danger ms-1">Remove</button>
        </div>
    );
};

export default Category;