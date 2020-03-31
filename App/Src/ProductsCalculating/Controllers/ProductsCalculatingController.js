/**
 * Контроллер для подсчета цен товаров
 */
class ProductsCalculatingController {
    /**
     * Запрос на сумму цен товаров в разных валютах
     */
    async calculating(req, res) {
        if(!Helper.getHasProperty(req, 'body')){
            res.status(400).send({error: 'Продукты не переданны!'});
        }

        const currency = await Container.productsCalculating(Container).calculating(req.body);

        res.status(201).send(currency);
    }
}

module.exports = ProductsCalculatingController;

