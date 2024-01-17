const homeRouter = require("./Routes/homeRouter.js");
const express = require("express");
const morgan = require("morgan");
const app = express();
const { connect } = require('./db.js')
const { handleGlobalErrors } = require("./errorHandler.js");

app.use(express.json());
app.use(morgan("dev"));

app.use("/", homeRouter);

app.use(handleGlobalErrors);


const port = 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
