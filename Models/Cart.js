const { model, Schema } = requiere("mongoose");

const CartSchema = new Schema({
    name: {type:String, requiere: true, unique: true},
    img: {type: String, requiere: true},
    amount: {type: Number, requiere: true},
    price: {type: Number, requiere: true},
});

module.exports = model("Cart" , CartSchema);