const express = require('express');
const { employeesMock } = require('../utils/mocks/employees');

function employeesApi(app){
  const router = express.Router();
  app.use('/api/employees', router);
  
  //1 GET
  router.get('/:employeeId', async function(req, res, next){
    try {
      const employees = await Promise.resolve(employeesMock[0]);

      res.status(200).json({
        data: employees,
        message: 'Employee retrieved',
      });
    } catch(err){
      next(err)
    }
  })

  //2 POST
  router.post('/', async function (req, res, next) {
    try {
      const createEmployeeId = await Promise.resolve(employeesMock[0].id);

      res.status(201).json({
        data: createEmployeeId,
        message: 'Employees created',
      });
    } catch (err) {
      next(err);
    }
  });

  //3 PUT
  router.put('/:employeeId', async function (req, res, next) {
    try {
      const updatedEmployeeId = await Promise.resolve(employeesMock[0].id);

      res.status(200).json({
        data: updatedEmployeeId,
        message: 'Employees updated',
      });
    } catch (err) {
      next(err);
    }
  });

  //4 DELETE
  router.delete('/:employeeId', async function (req, res, next) {
    try {
      const deletedEmployeeId = await Promise.resolve(employeesMock[0].id);

      res.status(200).json({
        data: deletedEmployeeId,
        message: 'Employee deleted',
      });
    } catch (err) {
      next(err);
    }
  });
  
};

module.exports = employeesApi