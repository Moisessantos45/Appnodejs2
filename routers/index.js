import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaNovelas,
  paginaComentarios,
  paginaContacto,
  infoNovelas,
} from "../controllers/controlador.js";
import { guardarComentarios } from "../controllers/comentariosSitio.js";

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaNovelas);
router.get("/viajes/:slug", infoNovelas);

router.get("/comentarios", paginaComentarios);
router.post("/comentarios", guardarComentarios);

router.get("/contacto", paginaContacto);

export default router;
