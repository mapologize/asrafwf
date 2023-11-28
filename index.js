const express = require('express');
const hbs = require('hbs');
const web3 = require('web3');

const generalRouter = require('./routers/general');

const port = 4444;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use('/static', express.static('static'));

app.use('/', generalRouter);

app.listen(port, () => {
    console.log("app listen port : " + port);
});