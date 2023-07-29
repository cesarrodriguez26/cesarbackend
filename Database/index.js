const mongoose = requiere("mongoose");

const MONGO_URL = "mongodb://localhost/shoppingCartYT";

const db = async () => {
    await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.export = db