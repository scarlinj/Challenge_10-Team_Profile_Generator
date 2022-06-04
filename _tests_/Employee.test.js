const Employee = require('../lib/Employee.js');

test('Creates an employee object', () => {
    const employeeCreate = new Employee();
  
    expect(typeOf(employeeCreate)).toBe('object');
  });

  test("Test Name", () => {
    const name = "Stephen";
    const employeeCreate = new Employee(name);
    expect(employeeCreate.name).toBe(name);
  });  

  test("Test ID", () => {
    const id = 2;
    const employeeCreate = new Employee("Stephen", id);
    expect(employeeCreate.id).toBe(id);
  });
  
  test("Test email", () => {
    const email = "scarlinj@gmail.com";
    const employeeCreate = new Employee("Stephen", 2, email);
    expect(employeeCreate.email).toBe(email);
  });

  test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Stephen", 2, "scarlinj@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
  });