Store.Views.EditProductView = Backbone.View.extend({
    initialize:function (options) {
    },
    el:"#prd",
    render: function (options) {
        var that = this, editTemplate = JST["p/templates/edit"];

        if(options.id) {
            that.product = new Store.Models.Product(options)
            that.product.fetch({
                success: function(p) {
                    that.$el.html(editTemplate({product: that.product}));
                }
            });
        } else {
            that.$el.html(editTemplate({product: null}));
        }
    },
    events: {
        'submit #product_form': 'saveProduct',
        'click .delete': 'deleteProduct'
    },
    saveProduct: function(evt) {
        var product = new Store.Models.Product($(evt.currentTarget).serializeObject());

        product.save(null, {
            success: function(product){
                Store.Router.navigate('', {trigger:true});
            }
        });

        return false;
    },
    deleteProduct: function(evt) {
        this.product.destroy({
            success: function(){
                Store.Router.navigate('', {trigger:true});
            }
        })
    }
});
