Store.Models.Product = Backbone.Model.extend({
    initialize: function(params) {
        this.id = params.id;
        this.name = params.name;
        this.image = params.image;
        this.category = params.category;
        this.description = params.description;
        this.created_at = params.created_at;
        this.updated_at = params.updated_at;
    },
    urlRoot: "/products"
});