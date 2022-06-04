const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {
    describe("Check Engineer class", () => {
        it("This should return engineer name, id, email, github name, and role", () => {
            const billy = new Engineer('Billy', '4', 'Billy14@gmail.com', 'billyTheKid1432', 'Engineer');

            expect(billy.getName()).toEqual('Billy');
            expect(billy.getId()).toEqual('4');
            expect(billy.getEmail()).toEqual('Billy14@gmail.com');
            expect(billy.getGithub()).toEqual('billyTheKid1432');
            expect(billy.getRole()).toEqual('Engineer');
        });
    });
});

// test("Create Github?", () => {
//     const githubTest = "scarlinj";
//     const employeeInstance = new Engineer(
//       "Stephen",
//       2,
//       "scarlinj@gmail.com",
//       githubTest
//     );
//     expect(employeeInstance.github).toBe(githubTest);
//   });
  
//   test("Will githubTest return github?", () => {
//     const githubTest = "scarlinj";
//     const employeeInstance = new Engineer(
//       "Stephen",
//       2,
//       "scarlinj@gmail.com",
//       githubTest
//     );
//     expect(employeeInstance.getGithub()).toBe(githubTest);
//   });
  
//   test("Role test.", () => {
//     const returnRole = "Engineer";
//     const employeeInstance = new Engineer(
//       "Stephen",
//       2,
//       "scarlinj@gmail.com",
//       "scarlinj"
//     );
//     expect(employeeInstance.getRole()).toBe(returnRole);
//   });
