const fs = require('fs');
const inquirer = require('inquirer');
const PageTemplate = require('./src/page-template.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');

// prompt questions 

const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'number'
    },    
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'team',
        choices: [
            'Engineer',
            'Intern',
            'There is no one to add'
          ]
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is your engineer's id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is your engineer's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is your engineer's Github username?",
        name: 'github'
    },    
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'team',
        choices: [
            'Engineer',
            'Intern',
            'There is no one to add'
          ]
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is your intern's id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is your intern's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What school does your intern graduate?",
        name: 'school'
    },    
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'team',
        choices: [
            'Engineer',
            'Intern',
            'There is no one to add'
          ]
    }
]


// make prompt 

const managerPrompt = () => {
    writeStarting();
    inquirer.prompt(managerQuestions)
    .then((res) => {
        const {name, id, email, number} = res;
        const manager = new Manager(name, id, email, number);
        writeManager(manager);
    
        // from here, will switch to the engineer, intern questions
        switch(res.team) {
            case 'Engineer': 
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'There is no one to add':
                closingToFile();
                break;
        }
        
    })
    };
    
const engineerPrompt = () => {
    inquirer.prompt(engineerQuestions)
    .then(res => {
        const {name, id, email, github} = res;
        const engineer = new Engineer(name, id, email, github);
        writeEngineer(engineer);

        switch(res.team) {
            case 'Engineer': 
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'There is no one to add':
                closingToFile();
                break;
        }

    })
};

const internPrompt = () => {
    inquirer.prompt(internQuestions)
    .then(res => {
        const {name, id, email, school} = res;
        const intern = new Intern(name, id, email, school);

        writeIntern(intern);

        switch(res.team) {
            case 'Engineer': 
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'There is no one to add':
                closingToFile();
                break;
        }

    })
};


// write to file


const writeStarting = () => {
    fs.appendFile('./dist/index.html', PageTemplate.generatePage(), (err) => 
    err? console.error(err) : console.log('Start to make your team!')
    )
}

const writeManager = (employees) => {
    fs.appendFile('./dist/index.html', PageTemplate.generateManager(employees), (err) => 
    err? console.error(err) : console.log('success to add')
    )
}

const writeEngineer = (employees) => {
    fs.appendFile('./dist/index.html', PageTemplate.generateEngineer(employees), (err) => 
    err? console.error(err) : console.log('success to add')
    )
}

const writeIntern = (employees) => {
    fs.appendFile('./dist/index.html', PageTemplate.generateIntern(employees), (err) => 
    err? console.error(err) : console.log('success to add')
    )
}

const closingToFile = () => {
    fs.appendFile('./dist/index.html', PageTemplate.closingHTML(), (err) => 
    err? console.error(err) : console.log('All done! See the created file')
    )
}


// run the code

managerPrompt();
