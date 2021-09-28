import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Category from "../Category/Category";
import { addToDb, getFromDb, removeFromDb } from "../Storage/Storage";
import "./Meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMeals(data.categories));
  }, []);


  const [selected, setSelected] = useState([]);
  // set to cart from db:
  useEffect(() => {
    if (meals.length) {
      const savedDb = getFromDb();
      const savedCart = [];
      for (const category in savedDb) {
        let foundCategory = meals.find((item) => item.strCategory === category);
        if (foundCategory) {
          const quantity = savedDb[category];
          foundCategory.quantity = quantity;
          savedCart.push(foundCategory);
        }
      }
      setSelected(savedCart);
    }
  }, [meals]);

  // state declared:
  // display to cart by click handler:

  const handleAdd = (meal) => {
    // object is not extensible:(error)
    // meal.quantity = 1;
    const newAdded = [...selected, meal];
    // ekhan theke set hosse na.reload dile tarpor set hoe.(problem)
    addToDb(meal.category);
    setSelected(newAdded);
    
  };
  const handleRemove = (meal) => {
    removeFromDb(JSON.stringify(meal));
  };

  const reducedItem = selected.reduce(
    (previous, current) => previous + current.quantity,
    0
  );

  return (
    <div className="display">
      <div className="mealsContainer">
        {meals.map((meal) => (
          <Category
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            key={meal.idCategory}
            id={meal.idCategory}
            category={meal.strCategory}
            img={meal.strCategoryThumb}
          ></Category>
        ))}
      </div>
      <div className="cart-list">
        <h2>Items:{reducedItem}</h2>
        {
            console.log(selected)
        }
        {selected.map((item) => (
          <Cart item={item}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Meals;
