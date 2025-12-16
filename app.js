import express from "express"; //Import express
const app = express (); //Initialize express by invoking it as a function and saving the result in a variable
const port = 3000; 


app.get("/", (req, res) =>{    //Define the first route
res.send("Hello World")      
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})