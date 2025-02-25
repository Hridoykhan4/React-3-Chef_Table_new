const getFoodItems = () => {
    const foodItems = localStorage.getItem('items');
    return foodItems ? JSON.parse(foodItems) : []
}

const saveToLS = (items) => {
    localStorage.setItem('items', JSON.stringify(items) )
}

const addToLS = (id) => {
    const items = getFoodItems()
    items.push(id);
    saveToLS(items)
}

const removeFromLS = (id) => {
    const items = getFoodItems();
    const remaining = items.filter((i) => i !== id);
    saveToLS(remaining)
}

export {getFoodItems, addToLS, removeFromLS};