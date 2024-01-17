const homeRouter = require("./routes/homeRouter.js");
const express = require("express");
const morgan = require("morgan");
const { connect } = require("./db.js");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/", homeRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("something went wrong :(");
});

const port = 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
