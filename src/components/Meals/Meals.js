import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import "./Meals.css";

const Meals = () => {
    const[meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setMeals(data.categories))
    }, [])
    return (
        <div className="mealsContainer">
            {
                // console.log(meals)
            }
            {
                
                meals.map(meal => <Category 
                    key={meal.idCategory}
                    id={meal.idCategory}
                    category={meal.strCategory}
                    img={meal.strCategoryThumb}/>)
                
            }
        </div>
    );
};

export default Meals;