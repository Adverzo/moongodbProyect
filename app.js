//importaciones de librerias
import mongoose from "mongoose";//nos conecta a mongodb
import express from "express";//crea servidor local
import dotenv from "dotenv";//trae las variables de entorno
import cors from "cors";//crea seguridad en el servidor

dotenv.config();//iniciando las variables de entorno


//conectar a la base de datos
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("conecto la base de datos")
})
.catch((error)=>{
    console.log("error al conectar a la base de datos")
}) //promesa

const app = express(); //creando un servidor local
app.use(cors()); //segudirad en el servidor
app.listen(4000, ()=>{
    console.log("se escucha el servidor")
})//verificando funcionalidad del servidor
