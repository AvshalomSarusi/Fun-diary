// const { unstable_usePrompt } = require('react-router-dom');
const port = 3000;
const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
const path = require('path');
const { send } = require('process');
app.use(bodyParser.urlencoded({extended: false}));

//רינדור של דפים
app.set("view engine","ejs");

app.set("views",path.join(__dirname, 'pages'));

app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
});

app.get('/', (req,res)=>{
    res.render("main");
});
