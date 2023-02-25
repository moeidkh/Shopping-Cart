const shorter = (str) => {
    let data = str.split(" ");
    return data[0] + " " + data[1]
}
const isInCart = (state, id) => {
    const res = !!state.selectedItems.find(item => item.id == id)
    return res
}

const quantityCount = (state, id) => {
    const res = state.selectedItems.find(item => item.id == id).quantity;
    return res    
}

export {shorter,isInCart, quantityCount}