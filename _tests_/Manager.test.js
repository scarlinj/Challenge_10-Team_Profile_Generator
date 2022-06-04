const Manager = require('../lib/Manager.js');


test("Create office number?", () => {
    const officeNumberTest = "2";
    const employeeInstance = new Manager(
      "Stephen",
      2,
      "scarlinj@gmail.com",
      officeNumberTest
    );
    expect(employeeInstance.officeNumber).toBe(officeNumberTest);
  });
  
  test("Will officeNumberTest return the office number?", () => {
    const officeNumberTest = "2";
    const employeeInstance = new Manager(
      "Stephen",
      2,
      "scarlinj@gmail.com",
      officeNumberTest
    );
    expect(employeeInstance.getGithub()).toBe(githubTest);
  });

//    follow same structure as Manager and Engineer
  test("Test role.", () => {
    const returnRole = "Manager";
    const employeeInstance = new Manager(
      "Stephen",
      2,
      "scarlinj@gmail.com",
      "scarlinj"
    );
    expect(employeeInstance.getRole()).toBe(returnRole);
  });
