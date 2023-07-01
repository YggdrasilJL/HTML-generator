function renderImage(img) {
    return img === ''
    ? '' : `<div id="img">
    <img src="${img}" alt="photo of me">
    </div>`
}

function generatePortfolio(data) {
return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${data.name}'s Portfolio</title>
    <link rel="stylesheet" href="assets/reset.css">
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <header>
        <h1>${data.name}</h1>
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
            Name: ${data.name}<br>
            Location: ${data.location}<br>
            Bio:<br> 
            ${data.bio}
        </p>
        <p>
            My favourite hobby:
            ${data.hobby}
        </p>
    </section>

    ${renderImage(data.img)}

    <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me at ${data.email} or through the following social media profiles:</p>
        <ul>
            <li><a href="${data.linkedin}">LinkedIn</a></li>
            <li><a href="https://github.com/${data.github}">GitHub</a></li>
        </ul>
    </section>

    <footer>
        <p>&copy; 2023 ${data.name}. All rights reserved.</p>
    </footer>
</body>
</html>
`
}

module.exports = generatePortfolio