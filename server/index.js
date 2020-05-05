const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const { config } = require('./config/index');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const serverConfig = { port: config.port, hot: true };

const employeesAPI = require('./routes/employees-routes');

//body parser
app.use(express.json());
app.use(webpackDevMiddleware(compiler, serverConfig));
app.use(webpackHotMiddleware(compiler));

employeesAPI(app);

//static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.disable('x-powered-by');

app.listen(config.port, function(){
  console.log(`listening http://localhost:${config.port}`);
});
