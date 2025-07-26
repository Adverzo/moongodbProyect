import {TablaAlumnos} from "../models/alumnos.model.js";

TablaAlumnos.create({
    name:"jesus",
    edad:25,
    calificacion:10
},
{
    name:"jessy",
    edad:24,
    calificacion:11
},
{
    name:"maxwell",
    edad:24,
    calificacion:100
})

export const test = ()=> {
    console.log("se esta llamando al controlador desde app")
}