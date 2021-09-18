let Api = {
    url:'https://cataas.com',
    getRandomCat: ()=> fetch(this.url + '/cat')
}

export default Api;