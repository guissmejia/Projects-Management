const express = require('express');
const app = express();
const { config } = require('./config/index');

const employeesAPi = require('./routes/employees');

employeesAPi(app);

app.get('/', function(req, res) {
  res.send('Hello World')
});

app.listen(config.port, function(){
  console.log(`listening http://localhost:${config.port}`);
})
