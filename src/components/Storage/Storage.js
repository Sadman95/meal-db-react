const addToDb = (category) =>{
    console.log(category)
    
    const itemsObj = getFromDb();
    if(category in itemsObj){
        
        console.log(itemsObj)
        // console.log(typeof(itemsObj))
        itemsObj[category] = itemsObj[category] + 1;
        localStorage.setItem('cart', JSON.stringify(itemsObj));
        
    }
    else{
        itemsObj[category] = 1;
        localStorage.setItem('cart', JSON.stringify(itemsObj));
    }

}


const removeFromDb = category => {
    console.log(category)
    const itemsObj = getFromDb();
    if(category in itemsObj === false){
        alert('not available')
    }
    else{
        delete itemsObj[category]
        localStorage.setItem('cart', JSON.stringify(itemsObj));
    }
}

const getFromDb = () => {
    const savedDb = localStorage.getItem("cart");
    let savedDbObj = JSON.parse(savedDb);
    if(savedDb){
        return savedDbObj;
    }
    else{
        savedDbObj = {}
    }
    return savedDbObj;
}
export {addToDb, removeFromDb, getFromDb}