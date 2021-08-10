const express = require('express');
const path = require('path');
const app = express();
const port = 3333;
const handlebar = require('express-handlebars');
const router = require('./router');
const db = require('./config/db');

app.use(express.static(path.join(__dirname, 'public')));

//connect db
db.connect();

//sử lý dữ liệu form-data bắn lên
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// hanndlebar
app.engine(
    'hbs',
    handlebar({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
//set lai duong dan
app.set('views', path.join(__dirname, 'resources/views'));
//console.log(path.join(__dirname,'resources/views'))
router(app);

app.listen(port);