const express = require('express');
const app = express();
const path = require('path');
const { send } = require('process');


const router = require("express").Router();

const port = 8080;



app.get("/default", (req,res) =>{
  const defaultuser = {
    nombre:"Fabian Gemelli",
    TarjetaDeCrédito:"2428 10124208 0",
    Dirección:"Azambuya 2586 AP 602",
  }

  return res.status(200).json({defaultuser})
});


const usuarios = require("./users");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);



app.use("/users", usuarios);

app.use(express.static(__dirname + "/public"));
/*app.get('/', (req,res) => {
  res.render(__dirname + "/panbastardo.ejs");
});*/

app.use((req,res,next) => {
    res.status(404).sendFile(__dirname + "/public/404.html");
});


//Listen Server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});