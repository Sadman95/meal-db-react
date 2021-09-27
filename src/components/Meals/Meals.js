import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Category from '../Category/Category';
import { addToDb, removeFromDb } from '../Storage/Storage';
import "./Meals.css";

const Meals = () => {
    
    const[meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setMeals(data.categories))
    }, [])


    const [selected, setSelected] = useState([]);
    
    const handleAdd = (meal) =>{
        // console.log(meal)
        const newAdded = [...selected,meal]
        // console.log(newAdded)
        setSelected(newAdded)
        addToDb(JSON.stringify(meal));
    }
    const handleRemove = (meal) =>{
        
        removeFromDb(JSON.stringify(meal))
    }

    return (
        <div className="display">
            <div className="mealsContainer">
            {
                console.log(selected)
            }
            {
                
                meals.map(meal => <Category
                    handleAdd={handleAdd}
                    handleRemove={handleRemove}
                    key={meal.idCategory}
                    id={meal.idCategory}
                    category={meal.strCategory}
                    img={meal.strCategoryThumb}/>)
                
            }
        </div>
        <div>
            <h2>Items:</h2>
            {
                selected.map(item => <Cart item={item}></Cart>)
            }
        </div>
        </div>
    );
};

export default Meals;