const path = require ("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//Primero pongo las rutas de mis endpoints
app.use("/api", (req, res, next)=> {
    res.send("Hellowis aca accedió a la: api.  :)");
});

//Luego que sirva la aplicación de React, del BUILD (hecho con el "npm run build")
const PATH = path.join(__dirname, "..", "client", "build");
console.log("Path: " + PATH);
app.use(express.static(PATH));

//esto fue la forma de resolver el quilombo 
// ==>  tengo que preguntar que es get diferencia del get y que significa el "/*"
app.get("/*", function(req, res) {
    res.sendFile(PATH + "/index.html")
})


app.listen(PORT, () => {
    console.log(`Listening - Escuchando - on PORT: ${PORT}`);
});