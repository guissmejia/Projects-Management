const express = require('express');
const app = express();
const path = require('path');
const { config } = require('./config/index');

const employeesAPI = require('./routes/employees-routes');

//body parser
app.use(express.json());

employeesAPI(app);

//static files
app.use(express.static(path.join(__dirname, '../public')));

app.listen(config.port, function(){
  console.log(`listening http://localhost:${config.port}`);
})
