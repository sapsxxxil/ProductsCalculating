const productsCalculatingController = require(Path.resolve('App/Src/ProductsCalculating/Controllers/ProductsCalculatingController.js'));

exports.build = function (app) {
    app.get('/calculating', function (req, res) {
        new productsCalculatingController().calculating(req, res);
    });
};
