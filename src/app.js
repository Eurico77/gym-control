const express = require('express');
const routes = require('./routes');
const nunjucks = require('nunjucks');
const app = express();

app.use(routes);
app.use(express.json());
app.use(express.static(`${__dirname}/public`));


app.set('view engine', 'njk');
nunjucks.configure('src/views', {
	express: app,
	autoescape: true,
	noCache: true,
});

app.listen(8080, () => {
  return console.log('server is runing');
});


module.exports = app;
