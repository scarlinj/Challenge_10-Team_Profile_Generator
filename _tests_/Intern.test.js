const Intern = require('../lib/Intern.js');


test("Create school?", () => {
    const schoolTest = "scarlinj";
    const employeeInstance = new Intern(
      "Stephen",
      2,
      "scarlinj@gmail.com",
      schoolTest
    );
    expect(employeeInstance.school).toBe(schoolTest);
  });
  
  test("Will schoolTest return school?", () => {
    const schoolTest = "Name of school";
    const employeeInstance = new Intern(
      "Stephen",
      2,
      "scarlinj@gmail.com",
      schoolTest
    );
    expect(employeeInstance.getGithub()).toBe(githubTest);
  });

//    follow same structure as Manager and Engineer
  test("Test role.", () => {
    const returnRole = "Intern";
    const employeeInstance = new Intern(
      "Stephen",
      2,
      "scarlinj@gmail.com",
      "scarlinj"
    );
    expect(employeeInstance.getRole()).toBe(returnRole);
  });
