const express = require('express');
const app = express();
const AccountRegister = require('./Routes/AccountRegister');
const morgan = require('morgan');
const { connect } = require('./db');
const { handleGlobalErrors } = require('./ErrorHandler');
require('dotenv').config();
app.use(express.json())
app.use(morgan("dev"))
app.use('/o', AccountRegister);
connect(process.env.URI)
app.use(handleGlobalErrors);
app.listen(5000, () => {
    console.log("started Server");
})