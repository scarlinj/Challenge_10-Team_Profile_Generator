// started with "function Employee(name) {", but put these in class/constructor instead

class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }

    getName() {
        return this.name;
      }
    
      getId() {
        return this.id;
      }
    
      getEmail() {
        return this.email;
      }
    // all Employees are role "Employee"
      getRole() {
        return "Employee";

    // Module example below - doesn't apply to Employee
    // if (this.name === 'health') {
    //   this.value = Math.floor(Math.random() * 10 + 30);
    // } else {
    //   this.value = Math.floor(Math.random() * 5 + 7);
    // }
  };
};
  module.exports = Employee;