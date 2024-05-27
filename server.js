const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const danhmucRouter = require('./router/danhmucRouter');
const userRouter = require('./router/userRouter');
const app = express();
const port = 3001
const url = "mongodb://127.0.0.1:27017/web18320";
mongoose.connect(url)
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(danhmucRouter);
app.use(userRouter);
app.listen(port, () => console.log(`listening on port 3001`));
