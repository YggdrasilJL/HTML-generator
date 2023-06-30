const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name? (First and last)',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Location:',
        name: 'location'
    },
    {
        type: 'input',
        message: 'Write a nice biography:',
        name: 'bio'
    },
    {
        type: 'input',
        message: 'What is your favourite hobby? Write a brief summary why you like it so much.',
        name: 'hobby'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'linkedin'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
])
 
const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Your Portfolio</title>
    <link rel="stylesheet" href="assets/reset.css">
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2>About</h2>
        <p>
            Name: Your Name<br>
            Location: Your Location<br>
            Bio: Write a brief description about yourself and your skills here.
        </p>
        <p>
            My favourite hobby:
            
        </p>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me at email@example.com or through the following social media profiles:</p>
        <ul>
            <li><a href="https://linkedin.com/your-profile">LinkedIn</a></li>
            <li><a href="https://github.com/your-profile">GitHub</a></li>
            <!-- Add more social media profiles as needed -->
        </ul>
    </section>

    <footer>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
    </footer>
</body>
</html>
`

