const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');


const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'Github',
            message: 'Enter your e-mail address'
        }, {
            type: 'input',
            name: 'Github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        }, {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({
                confirmAbout
            }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};


const promptProject = portfolioData => {
    console.log(`
=================
Add a New Project
=================
`);
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer
        .prompt([{
                type: 'input',
                name: 'Project name',
                message: 'What is the name of your project?'
            },
            {
                type: 'input',
                name: 'Project description',
                message: 'Provide a description of the project (Required)'
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'What did you build this project with? (Check all that apply)',
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
            },
            {
                type: 'input',
                name: 'Project Github link',
                message: 'Enter the GitHub link to your project. (Required)'
            },
            {
                type: 'confirm',
                name: 'feature',
                message: 'Would you like to feature this project?',
                default: false
            },
            {
                type: 'confirm',
                name: 'confirmAddProject',
                message: 'Would you like to enter another project?',
                default: false
            }
        ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
};

promptUser()
    // .then(answers => console.log(answers))
    .then(promptProject)
    .then(portfolioData => {
        const pageHTML = generatePage(portfolioData);

        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) throw new Error(err);

            console.log('Page created! Check out index.html in this directory to see it!');

            fs.copyFile('./src/style.css', './dist/style.css', err => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Style sheet copied successfully!');
            });
        });
    });