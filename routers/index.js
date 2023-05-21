import express from 'express';
import { paginaInicio, paginaNosotros, paginaNovelas, paginaComentarios, paginaContacto,infoNovelas,paginaViajes } from "../controllers/controlador.js";
import {guardarComentarios} from "../controllers/comentariosSitio.js"
const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/novelas", paginaNovelas);
router.get("/novelas/:slug", infoNovelas);


router.get("/comentarios", paginaComentarios);
router.post("/comentarios", guardarComentarios);


router.get("/contacto", paginaContacto);


export default router;  