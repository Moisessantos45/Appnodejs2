import express from 'express';
import router from './routers/index.js';
import db from "./config/db.js"

const app = express();

//conectar a una base de datos
db.authenticate()
  .then(() => console.log("base de datos conectada"))
  .catch(error => console.log(error));

const port = process.env.PORT || 4000;
//pug
app.set("view engine", "pug")

//obtener la fecha mediante javascript
app.use((req, res, next) => {
  const year = new Date()
  res.locals.fecha = year.getFullYear()
  res.locals.nombre = "Agencia de Viajes";
  next()
})

//funcion para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//hoja de estilo
app.use(express.static("public"))
app.use("/", router)


app.listen(port, () => {
  console.log(`el servido esta funcionando ${port}`)
})
