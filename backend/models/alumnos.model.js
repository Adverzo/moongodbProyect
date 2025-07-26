import { Schema, model } from "mongoose";

//crear una estructura para una tabla
const EsquemaAlumnos = new Schema({
    name:String,
    edad:Number,
    calificacion:Number
})

//creacion de tabla
export const TablaAlumnos = new model("Alumnos", EsquemaAlumnos)

