Store.Router = (function(window, document, $, undefined){
    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'new': 'editProduct',
            'edit/:id': 'editProduct',
            'delete/:id': 'deleteProduct'
        }
    });

    var router = new Router(),
        productListView = null,
        editProductsView = null;

    function homeRouteHandler(params) {
        var _params = params ? $.deparam(params) : {};
        productListView = productListView || new Store.Views.ProductListView();
        productListView.render(_params);
    }

    function editProductRouteHandler(id) {
        editProductsView = editProductsView || new Store.Views.EditProductView();
        editProductsView.render({id: id});
    }

    function deleteProductRouteHandler(id) {
        var product = new Store.Models.Product({id: id})
        product.destroy({
            success: function() {
                Store.Router.navigate('', {trigger:true});
            }
        })
    }

    router.on('route:home', homeRouteHandler);
    router.on('route:editProduct', editProductRouteHandler);
    router.on('route:deleteProduct', deleteProductRouteHandler);

    Backbone.history.start();

    return router;
})(window, document, jQuery);