const inquirer = require('inquirer')
const fs = require('fs')
const generatePortfolio = require('./html-content')

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name? (First and last)\n',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Location:\n',
        name: 'location'
    },
    {
        type: 'input',
        message: 'Write a nice biography:\n',
        name: 'bio'
    },
    {
        type: 'input',
        message: 'What is your favourite hobby? Write a brief summary why you like it so much.\n',
        name: 'hobby'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?\n',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?\n',
        name: 'linkedin'
    },
    {
        type: 'input',
        message: 'What is your email?\n',
        name: 'email'
    },
])
.then(data => {
    const htmlContent = generatePortfolio(data)
    writeToFile('index.html', htmlContent)
})
.catch(err => {
    console.error('Oops! An error occurred:', err)
})

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
      if (error) {
        throw error
      } else {
        console.log("Your portfolio was generated successfully! Check your folder.")
      }
    });
  }
 

