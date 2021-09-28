const addToDb = (category) =>{
    console.log(category)
    const itemsObj = getFromDb();
    if(category in itemsObj){
        
        // console.log(itemsObj)
        // console.log(typeof(itemsObj))
        itemsObj[category] = itemsObj[category] + 1;
        
    }
    else{
        itemsObj[category] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(itemsObj));

}


const removeFromDb = category => {
    // console.log(category)
    const itemsObj = getFromDb();
    if(category in itemsObj === false){
        alert('not available')
    }
    else{
        delete itemsObj[category]
    }
    localStorage.setItem('cart', JSON.stringify(itemsObj));
}

const getFromDb = () => {
    let savedDb = localStorage.getItem("cart");
    if(savedDb){
        savedDb = JSON.parse(savedDb);
    }
    else{
        savedDb = {}
    }
    return savedDb;
}
export {addToDb, removeFromDb, getFromDb}