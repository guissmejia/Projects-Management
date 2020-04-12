const express = require('express');
const app = express();
const { config } = require('./config/index');

const employeesAPI = require('./routes/employees');

//body parser
app.use(express.json());

employeesAPI(app);

app.listen(config.port, function(){
  console.log(`listening http://localhost:${config.port}`);
})
