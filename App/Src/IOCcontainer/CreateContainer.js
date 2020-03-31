module.exports = function () {
    let containerRequire = new require(Path.resolve('App/Src/IOCcontainer/Container.js'));
    let container = new containerRequire;

    require(Path.resolve('App/Src/ProductsCalculating/Provider.js'))(container);

    return container;
};