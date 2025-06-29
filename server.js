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
            title: "Artista preferita",
            content: "Yayoi Kusama è una dei più importanti artisti viventi del Giappone. È l'artista vivente che ha venduto di più al mondo. ",
            img: `http://localhost:${port}/img/yayoi_kusama.jpeg`,
            tags: ["art", "passion"]

        },
        {
            title: "Ultimo libro letto",
            content: "Cecità è un romanzo dello scrittore e premio Nobel per la letteratura portoghese José Saramago.",
            img: `http://localhost:${port}/img/cecità_saramago.jpeg`,
            tags: ["book","reading"]

        },
        {
            title: "Film che non mi stanco di vedere",
            content: "Non ha bisogno di presentazioni. Un film che merita di essere visto e rivisto",
            img: `http://localhost:${port}/img/una_settimana_da_dio.jpg`,
            tags: ["comedy", "cinema"]

        },
        {
            title: "Posti che vorrei visitare",
            content: "Il Vietnam è caratterizzato da cultura, paesaggi naturali di incredibile bellezza, città caotiche e villaggi che sorgono sulle rive dei fiumi e tra le montagne.",
            img: `http://localhost:${port}/img/vietnam.jpg`,
            tags: ["travel", "world"]

        },
        {
            title: "Da fare",
            content: "Il surf è uno sport acquatico che consiste nel cavalcare le onde del mare utilizzando una tavola da surf.",
            img: `http://localhost:${port}/img/surf.jpeg`,
            tags: ["sport", "sea"]

        }
    ];

    res.json(posts);
})
//Start the server listener
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
