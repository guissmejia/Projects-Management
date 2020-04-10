const { employeesMock } = require('../utils/mocks/employees');

class EmployeesService {
  async getEmployees() {
    const employees = await Promise.resolve(employeesMock);
    return employees || [];
  }

  async getEmployee() {
    const employee = await Promise.resolve(employeesMock[0]);
    return employee || {};
  }

  async createEmployee() {
    const createEmployeeId = await Promise.resolve(employeesMock[0].id);
    return createEmployeeId;
  }

  async updateEmployee() {
    const updatedEmployeeId = await Promise.resolve(employeesMock[0].id);
    return updatedEmployeeId;
  }

  async updatePartialDataEmployee() {
    const updatedPartialDataEmployeeId = await Promise.resolve(employeesMock[0].id);
    return updatedPartialDataEmployeeId;
  }

  async deleteEmployee() {
    const deletedEmployeeId = await Promise.resolve(employeesMock[0].id);
    return deletedEmployeeId;
  }
}

module.exports = EmployeesService;