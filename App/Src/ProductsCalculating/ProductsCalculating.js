/**
 * Функционал подсчета цен товаров
 */
class ProductsCalculating {
    _currencyRate;
    /**
     * Сумма цен товаров в разных валютах
     * @param {object}
     */
    _sum = {};

    constructor($currencyRate) {
        this._currencyRate = $currencyRate;
    }

    /**
     * Считает сумму цен товаров в разных валютах
     * @param {object} $products
     * @returns {object} - {error:}|{result:}
     */
    async calculating($products) {
        const currency = await this._currencyRate.getCurrency();
        if (!Helper.getHasProperty(currency, 'result')) {
            return {error: 'Курс валют не получен!'};
        }

        $products.forEach(product => {
            const currencyRate = currency.result[product.currency].Value;

            let price = Number(product.price) * Number(product.quantity) * Number(currencyRate);

            this._addSum(product.currency, price);
        });

        return this._sum;
    }

    /**
     * Добавляем к сумме
     * @param {string} $currency
     * @param {number} $price
     * @private
     */
    _addSum($currency, $price) {
        if (this._sum[$currency]) {
            this._sum[$currency] += $price;
        } else {
            this._sum[$currency] = $price;
        }
    }
}

module.exports = ProductsCalculating;

