const Manager = require('../lib/Manager.js');

describe("Manager", () => {
    describe("Check Manager class", () => {
        it("This should return manager name, id, email, officeNumber", () => {
            const joe = new Manager('Joe', '3', 'JoeSchmo@gmail.com', '1450');

            expect(joe.getName()).toEqual('Joe');
            expect(joe.getId()).toEqual('3');
            expect(joe.getEmail()).toEqual('JoeSchmo@gmail.com');
            expect(joe.getOfficeNumber()).toEqual('1450');
        });
    });
});

// test("Create office number?", () => {
//     const officeNumberTest = "2";
//     const employeeInstance = new Manager(
//       "Stephen",
//       2,
//       "scarlinj@gmail.com",
//       officeNumberTest
//     );
//     expect(employeeInstance.officeNumber).toBe(officeNumberTest);
//   });
  
//   test("Will officeNumberTest return the office number?", () => {
//     const officeNumberTest = "2";
//     const employeeInstance = new Manager(
//       "Stephen",
//       2,
//       "scarlinj@gmail.com",
//       officeNumberTest
//     );
//     expect(employeeInstance.getGithub()).toBe(githubTest);
//   });

// //    follow same structure as Manager and Engineer
//   test("Test role.", () => {
//     const returnRole = "Manager";
//     const employeeInstance = new Manager(
//       "Stephen",
//       2,
//       "scarlinj@gmail.com",
//       "scarlinj"
//     );
//     expect(employeeInstance.getRole()).toBe(returnRole);
//   });
