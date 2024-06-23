import { Viaje } from "../modules/sitio.js";
import { Comentarios } from "../modules/Comentarios.js";

const paginaInicio = async (req, res) => {
  //consultar los viajes
  try {
    const [dataViaje, dataComentario] = await Promise.allSettled([
      Viaje.findAll({ limit: 3 }),
      Comentarios.findAll({ limit: 3 }),
    ]);

    const resultados = dataViaje.status === "fulfilled" ? dataViaje.value : [];
    const comentarios =
      dataComentario.status === "fulfilled" ? dataComentario.value : [];

    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      novelass: resultados,
      mensajes: comentarios,
    });
  } catch (error) {
    res.status(400).send("Error al cargar la pagina");
  }
};
const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Sitio web de viajes",
  });
};

const paginaNovelas = async (req, res) => {
  //novelas import de la base de datos
  const novelass = await Viaje.findAll();

  if (!novelass) {
    res.redirect("/");
    return;
  }

  res.render("novelas", {
    pagina: "Sitios Disponibles",
    novelass,
  });
};

const paginaComentarios = async (req, res) => {
  try {
    const mensajes = await Comentarios.findAll();

    if (!mensajes) {
      res.redirect("/");
      return;
    }

    res.render("comentarios", {
      pagina: "Comentarios destacados",
      mensajes,
    });
  } catch (error) {
    res.status(400).send("Error al cargar la pagina");
  }
};

const paginaContacto = (req, res) => {
  res.render("contacto");
};

const paginaViajes = (req, res) => {
  res.send("viajes");
};

//infomacion de novelas
const infoNovelas = async (req, res) => {
  const { slug } = req.params;
  try {
    const viaje = await Viaje.findOne({ where: { slug } });

    if (!viaje) {
      res.redirect("/viajes");
      return;
    }

    res.render("viajes", {
      pagina: "Informacion de los sitios",
      viaje,
    });
  } catch (error) {
    res.status(400).send("Error al cargar la pagina");
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaNovelas,
  paginaComentarios,
  paginaContacto,
  infoNovelas,
  paginaViajes,
};
