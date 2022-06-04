const Engineer = require('../lib/Engineer.js');


test("Create Github?", () => {
    const githubTest = "scarlinj";
    const employeeInstance = new Engineer(
      "Stephen",
      2,
      "scarlinj@gmail.com",
      githubTest
    );
    expect(employeeInstance.github).toBe(githubTest);
  });
  
  test("Will githubTest return github?", () => {
    const githubTest = "scarlinj";
    const employeeInstance = new Engineer(
      "Stephen",
      2,
      "scarlinj@gmail.com",
      githubTest
    );
    expect(employeeInstance.getGithub()).toBe(githubTest);
  });
  
  test("Role test.", () => {
    const returnRole = "Engineer";
    const employeeInstance = new Engineer(
      "Stephen",
      2,
      "scarlinj@gmail.com",
      "scarlinj"
    );
    expect(employeeInstance.getRole()).toBe(returnRole);
  });
