const express = require("express");
const app = express();
const path = require("path");

//configuro la ruta para imagenes y estaticos publicos
app.use(express.static(__dirname + "/Public"));
//configuro app.js para que pueda usar los archivos ejs
app.set("view engine", "ejs");
// para avisarle a app.js que tengo una carpeta de rutas y use esas rutas. la requiero y luego la uso
const mainRoutes = require("./routes/mainRoutes"); // Rutas main
app.use("/", mainRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Servidor corriendo en el puerto 3000"));
