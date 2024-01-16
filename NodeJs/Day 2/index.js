const express = require("express");
const productsRouter = require("./routes/productsRouter.js");
const homeRouter = require("./routes/homeRouter.js");


const port = 5000;
const app = express();

app.use(express.json());
app.use("/products", productsRouter);
app.use("/", homeRouter);

app.listen(port, () => {
    console.log(`server up and running on port: ${port}, happy deveolpment :)`);
});