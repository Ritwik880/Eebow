const dotenv = require('dotenv')
const express = require('express');
const app = express();


dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());
// const User = require('./model/userSchema');
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// const middleware = (req, res, next) => {
//     next();

// }

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`)
})