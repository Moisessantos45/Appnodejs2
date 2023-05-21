import Sequelize from "sequelize";
import db from "../config/db.js";

export const Comentarios=db.define("comentarios",{
    nombre:{
        type: Sequelize.STRING
    },
    correo:{
        type:Sequelize.STRING
    },
    mensaje:{
         type:Sequelize.STRING  
    },
})