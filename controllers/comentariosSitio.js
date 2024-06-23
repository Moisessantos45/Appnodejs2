import { Comentarios } from "../modules/Comentarios.js";

const guardarComentarios = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  try {
    const errores = [];

    const data = [nombre, correo, mensaje].filter((e) => {
      if (e.trim() === "") {
        errores.push({ mensaje: `El campo ${e} esta vacio` });
        return e;
      }
    });

    if (errores.length > 0) {
      const mensajes = await Comentarios.findAll();
      //mostrar los errores
      res.render("comentarios", {
        pagina: "comentarios",
        errores,
        nombre,
        correo,
        mensaje,
        comentario,
        mensajes,
      });
      return;
    }

    await Comentarios.create({
      nombre,
      correo,
      mensaje,
    });

    res.redirect("/comentarios");
  } catch (error) {
    res.status(400).send("Error al guardar el comentario");
  }
};

export { guardarComentarios };
