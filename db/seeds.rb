# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


products = Product.create([
    {name: "Green Dress", image: "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=20310329", price: 100, category: "Dress"},
    {name: "Red Dress", image: "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=33549633", price: 100, category: "Dress"},
    {name: "Purple Dress", image: "http://2.bp.blogspot.com/_B6J6nGs6VwA/TGlZFA0KH7I/AAAAAAAAue4/hsG14RFg6PQ/s400/Becky+Dress.jpg", price: 100, category: "Dress"},

    {name: "Dark Gray Pants 1", price: 30, category: "Pants", image: "http://ak1.ostkcdn.com/images/products/6502140/Giorgio-Fiorelli-Mens-Charcoal-Single-Pleat-Pants-P14091626.jpg"},
    {name: "Dark Gray Pants 2", price: 20, category: "Pants", image: "http://www.ravistailor.com/images/shop/style_8863_single_pleated_offset_piped_pocket_tapered_leg_dress_pants.jpg"},
    {name: "Khakhi Pants", price: 40, category: "Pants", image: "http://www.mycustomclothing.com/images/shop/style_8061_elegant_single_pleated_dress_pants.jpg"},

    {name: "Blue Shirt", price: 20, category: "Shirts", image: "https://s7.jcrew.com/is/image/jcrew/60763_WW8415?$pdp_fs418$"},
    {name: "Orange Shirt", price: 20, category: "Shirts", image: "http://www.scottevest.com/mm5/graphics/00000001/p_camp_shirt_mango_zm.jpg"},
    {name: "Green Shirt", price: 20, category: "Shirts", image: "http://wearescientists.com/_a/i/shirt_bramble_olive.gif"}
])