import { json } from "sequelize"
import { Viaje } from "../modules/sitio.js"
import { Comentarios } from "../modules/Comentarios.js"

const paginaInicio = async (req, res) => {

    //consultar los viajes
    const promiseDB =[]
    promiseDB.push(Viaje.findAll({limit:3}))
    promiseDB.push(Comentarios.findAll({limit:3}))

    try {
       const resultados= await Promise.all(promiseDB)
    res.render("inicio", {
        pagina: "Inicio",
        clase:"home",
        novelass: resultados[0],
        mensajes:resultados[1]
    })
    } catch (error) {
        console.log(error)
    }
}
const paginaNosotros = (req, res) => {
    res.render("nosotros", {
        pagina: "Sitio web de viajes"
    })
} 

const paginaNovelas = async (req, res) => {
    //novelas import de la base de datos
    const novelass = await Viaje.findAll();
    console.log(novelass)
    res.render("novelas", {
        pagina: "Sitios Disponibles",
        novelass,
    })
}

const paginaComentarios = async (req, res) => {
    try {
        const mensajes=await Comentarios.findAll();
        res.render("comentarios", {
            pagina: "Comentarios destacados",
            mensajes
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaContacto = (req, res) => {
    res.send("conctacto")
}

const paginaViajes = (req, res) => {
    res.send("viajes")
}

//infomacion de novelas
const infoNovelas = async (req, res) => {
    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render("viajes", {
            pagina: "Informacion de los sitios",
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaNovelas,
    paginaComentarios,
    paginaContacto,
    infoNovelas,
    paginaViajes
}