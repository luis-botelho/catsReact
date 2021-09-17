let Api = {
    url:'https://cataas.com',
    getRandomCat: ()=> fetch(Api.url + '/cat')
}

export default Api;