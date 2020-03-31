class CurrencyRate {
    _axios;

    constructor($axios){
        this._axios = $axios;
    }

    /**
     * Получяаем курс валют
     * @returns {object} - {error:}|{result:}
     */
    async getCurrency(){
        const currency = await this._axios.get(process.env.CURRENCY_URL)
            .then(response => {
                return {result: response.data.Valute};
            })
            .catch(error => {
                return {error};
            });

        return currency;
    }
}

module.exports = CurrencyRate;