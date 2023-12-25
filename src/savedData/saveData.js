const SaveData = data => {
    localStorage.setItem('addToCart', JSON.stringify(data))
}

export default SaveData