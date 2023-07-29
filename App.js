const express = require("express");
const cors = require("cors");
const db = requiere("./Database");

const controllers = requiere ("/controllers");

const app = express();

app.use (cors());
app.use(express.json());

app.get("/products", controllers.getProducts);
app.get("/products-cart", controllers.getProductsCart);

app.post("/products-cart", controllers.addProductCart);

app.put("/products-cart/:productId", controllers.putProduct);

app.delete("/products-cart/:productId", controllers.deleteProduct);

app.listen(4000, () =>{
    console.log("Server funcionando en el puerto 4000");
    db();
});



app.listen(4000, () => {
    console.log("server funcionando en el puerto 4000");

});

module.exports= app;