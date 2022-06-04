const path = require ("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//Primero pongo las rutas de mis endpoints
app.use("/api", (req, res, next)=> {
    res.send("Hellowis aca accedió a la: api.  :)");
});

//Luego que sirva la aplicación de React
const PATH = path.join(__dirname, "..", "client", "build");
console.log("Path: " + PATH);
app.use(express.static(PATH));

//Luego que sirva la aplicación de React
//app.use("/*", express.static(path.join(__dirname + "/../" + "client/" + "public")));

app.listen(PORT, () => {
    console.log(`Listening - Escuchando - on PORT: ${PORT}`);
});