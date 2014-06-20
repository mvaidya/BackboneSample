Store.Collections.ProductList = Backbone.Collection.extend({
    initialize:function (models, options) {
        this.category = options.category;
    },
    url:function () {
        return this.category ? "/products?category=" + this.category : "/products"
    }
});