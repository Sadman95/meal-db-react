const addToDb = (category) =>{
    console.log(category)
    const itemsObj = {};
    const isExist = localStorage.getItem('cart');
    if(!isExist){
        itemsObj[category] = 1;
        localStorage.setItem('cart', JSON.stringify(itemsObj));
    }
    else{
        const itemsObj = JSON.parse(localStorage.getItem('cart'));
        console.log(itemsObj)
        // console.log(typeof(itemsObj))
        if(!itemsObj[category]){
            itemsObj[category] = 0;
        }
        const newAdd = itemsObj[category] + 1;
        itemsObj[category] = newAdd;
        localStorage.setItem('cart', JSON.stringify(itemsObj));
    }

}


const removeFromDb = category => {
    console.log(category)
    const isExist = localStorage.getItem('cart');
    if(!isExist){
        alert('not available')
    }
    else{
        const itemsObj = JSON.parse(isExist);
        const removeCount = (itemsObj[category]>0 ? itemsObj[category] - 1 : 0);
        itemsObj[category] = removeCount;
        localStorage.setItem('cart', JSON.stringify(itemsObj));
    }
}
export {addToDb, removeFromDb}