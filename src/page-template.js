const generatePage= () => {

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team Members</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="./css.css">
  </head>
  
  <body>
  
      <nav class="navbar navbar-light bg-danger p-5">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 text-white">My Team</span>
          </div>
      </nav>
  
  
      <div class="container-xl m-2 d-flex">
  `
};

//  no need for generateEmployee, since manager, intern and engineer all derivce from Employee.js

const generateEmployee = (employee) => {

  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id : ${employee.getId()}</li>
      <li class="list-group-item">Email : ${employee.getEmail()}</li>
    </ul>
  </div>
  </div>
  `
};

const generateManager = (manager) => {

    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id : ${manager.getId()}</li>
        <li class="list-group-item">Email : ${manager.getEmail()}</li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
    </div>
    `
};

const generateEngineer = (Engineer) => {
    return `
  
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${Engineer.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${Engineer.getRole()}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id : ${Engineer.getId()}</li>
        <li class="list-group-item">Email : ${Engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: ${Engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
  
  
  `
}

const generateIntern = (Intern) => {

  return `
  
  
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${Intern.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${Intern.getRole()}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id : ${Intern.getId()}</li>
      <li class="list-group-item">Email : ${Intern.getEmail()}</li>
      <li class="list-group-item">School: ${Intern.getSchool()}</li>
    </ul>
  </div>
  </div>
  
  `
}

const closingHTML = () => {
  return `
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
  </body>
  </html>`

}

module.exports = {generatePage, generateEmployee, generateEngineer, generateIntern, generateManager, closingHTML}