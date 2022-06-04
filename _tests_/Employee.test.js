const Employee = require('../lib/Employee.js');

describe("Employee", () => {
    describe("Check employee class", () => {
        it("This should return employee name, id, and email", () => {
            const stephen = new Employee('Stephen', '1', 'scarlinj@gmail.com');

            expect(stephen.getName()).toEqual('Stephen');
            expect(stephen.getId()).toEqual('1');
            expect(stephen.getEmail()).toEqual('scarlinj@gmail.com');
        });
    });
});

// 
// test('Creates an employee object', () => {
//     const employeeCreate = new Employee();
  
//     expect(typeOf(employeeCreate)).toBe('object');
//   });

//   test("Test Name", () => {
//     const name = "Stephen";
//     const employeeCreate = new Employee(name);
//     expect(employeeCreate.name).toBe(name);
//   });  

//   test("Test ID", () => {
//     const id = 2;
//     const employeeCreate = new Employee("Stephen", id);
//     expect(employeeCreate.id).toBe(id);
//   });
  
//   test("Test email", () => {
//     const email = "scarlinj@gmail.com";
//     const employeeCreate = new Employee("Stephen", 2, email);
//     expect(employeeCreate.email).toBe(email);
//   });

//   test("Testing role.", () => {
//     const returnValue = "Employee";
//     const employeeInstance = new Employee("Stephen", 2, "scarlinj@gmail.com");
//     expect(employeeInstance.getRole()).toBe(returnValue);
//   });