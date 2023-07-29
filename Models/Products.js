const { model, Schema } = requiere("mongoose");

const ProductSchema = new Schema({
    name: {type:String, requiere: true, unique: true},
    img: {type: String, requiere: true},
    inCart: {type: Boolean, default: true},
    price: {type: Number, requiere: true},
});

module.exports = model("Product", ProductSchema);