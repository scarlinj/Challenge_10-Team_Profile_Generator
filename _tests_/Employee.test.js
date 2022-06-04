const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Employee1');
  
    expect(employee.name).toBe('Employee1');
    expect(employee.value).toEqual(expect.any(Number));
  });