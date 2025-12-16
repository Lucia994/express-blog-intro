import express from "express"; //Import express
import postsList from "./data.js";
const app = express(); //Initialize express by invoking it as a function and saving the result in a variable
const port = 3000;


app.use(express.static("public")); // To handle static files

app.get("/", (req, res) => {    //Define the first route
    res.send("Server del mio blog")
})

app.get("/bacheca", (req, res) => {    //Define the "bacheca" route
    res.json(postsList)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})