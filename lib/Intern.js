const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email, school);
      this.github = github;
    }
  
    getSchool() {
      return this.github;
    }
  
    getRole() {
      return "Intern";
    }
  }
  
  module.exports = Intern;