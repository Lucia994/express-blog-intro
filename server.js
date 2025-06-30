//Import the express library
const express = require('express')
//Create an instance of the express app
const app = express()
//Define the port you want to use for the server listener
const port = 3000
app.use(express.static("public"))

//Define a route of the root URL
app.get('/', (req, res) => {
    res.type("html") //It's not required, but we can specify the type
        .send(`<h1>Server del mio blog</h1>`)

})
//Add a route to get blog posts 
app.get('/api/posts', (req, res) => {
    const posts = [
        {
            title: "Ciambellone",
            content: "",
            img: `http://localhost:${port}/images/ciambellone.jpeg`,
            tags: ["", ""]

        },
        {
            title: "Cracker barbabietola",
            content: "",
            img: `http://localhost:${port}/images/cracker_barbabietola.jpeg`,
            tags: ["",""]

        },
        {
            title: "Pane fritto dolce",
            content: "",
            img: `http://localhost:${port}/images/pane_fritto_dolce.jpeg`,
            tags: ["", ""]

        },
        {
            title: "Pasta barbabietola",
            content: "",
            img: `http://localhost:${port}/images/pasta_barbabietola.jpeg`,
            tags: ["", ""]

        },
        {
            title: "Torta paesana",
            content: "",
            img: `http://localhost:${port}/images/torta_paesana.jpeg`,
            tags: ["sport", "sea"]

        }
    ];

    res.json(posts);
})
//Start the server listener
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
