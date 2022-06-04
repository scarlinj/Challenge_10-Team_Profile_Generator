const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const output_dir = path.resolve(__dirname, "output");
const pathOutPut = path.join(output_dir, "team.html"); //path for url/html
const generatedTeam = require("./src/page-template.js"); //path to template for html

teamArray = [];

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
            name: 'managerMName',
            message: 'Enter the manager name.'
        }, {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID.'
        },
        {
            type: 'confirm',
            name: 'managerEmail',
            message: 'Enter the manager e-mail.',
            default: true
        }, {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Enter the manager office number.',
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


// const promptProject = portfolioData => {
//     console.log(`
// =================
// Add a New Project
// =================
// `);
//     // If there's no 'projects' array property, create one
//     if (!portfolioData.projects) {
//         portfolioData.projects = [];
//     }
//     return inquirer
//         .prompt([{
//                 type: 'input',
//                 name: 'Project name',
//                 message: 'What is the name of your project?'
//             },
//             {
//                 type: 'input',
//                 name: 'Project description',
//                 message: 'Provide a description of the project (Required)'
//             },
//             {
//                 type: 'checkbox',
//                 name: 'languages',
//                 message: 'What did you build this project with? (Check all that apply)',
//                 choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//             },
//             {
//                 type: 'input',
//                 name: 'Project Github link',
//                 message: 'Enter the GitHub link to your project. (Required)'
//             },
//             {
//                 type: 'confirm',
//                 name: 'feature',
//                 message: 'Would you like to feature this project?',
//                 default: false
//             },
//             {
//                 type: 'confirm',
//                 name: 'confirmAddProject',
//                 message: 'Would you like to enter another project?',
//                 default: false
//             }
//         ])
//         .then(projectData => {
//             portfolioData.projects.push(projectData);
//             if (projectData.confirmAddProject) {
//                 return promptProject(portfolioData);
//             } else {
//                 return portfolioData;
//             }
//         });
// };

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

    
function htmlBuilder(teamArray) {
    fs.writeFileSync(pathOutPut, generatedTeam(teamArray), "utf-8");
    console.log("Your team has been created!");
  }
  