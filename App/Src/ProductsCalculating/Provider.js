const axios = require('axios');
const currencyRate = require(Path.resolve('App/Src/ProductsCalculating/CurrencyRate.js'));
const productsCalculating = require(Path.resolve('App/Src/ProductsCalculating/ProductsCalculating.js'));

module.exports = function(c){
    c.service('currencyRate', c => new currencyRate(axios));
    c.service('productsCalculating', c => function (c) {
        return new productsCalculating(c.currencyRate);
    });
};