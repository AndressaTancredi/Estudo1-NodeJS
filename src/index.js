const express = require ('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false})); //entender quando passar parametros url
require('./controllers/authController')(app); 

app.listen(3000);

