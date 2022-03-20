const getData = (str) => {
    return fetch('https://ozone-f530e-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json()
    })
    
}
export default getData