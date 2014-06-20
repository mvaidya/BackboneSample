Store.Views.ProductListView = Backbone.View.extend({
    initialize:function () {
    },
    el:"#prd",
    render:function (options) {
        var category = options.category,
            data = new Store.Collections.ProductList([], {category:category}),
            that = this;
        data.fetch({
            success:function (data) {
                var listTemplate = JST["p/templates/list"],
                    models = data.models[0],
                    products = models.get("products"), categories = models.get("categories");

                if (listTemplate) {
                    that.$el.html(listTemplate({products:products, categories:categories, cur_category:category}));
                }
            }
        });

    }
});
