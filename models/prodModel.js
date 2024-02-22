const Product = require('../data/products.json')


const findAll = function(){
    return new Promise((resolve,reject) =>{
        resolve(Product);
    })
}

const findByName = function(prodName){
    return new Promise((resolve,reject) =>{
        resolve(Product[prodName]);
    })
}

module.exports = {findAll,findByName}