import {Asignacion_notas,Ver_notas} from '../controller/calificacionescontroller.js'
import express from 'express';
const router = express.Router();

router.post('/Asignacionnotas', Asignacion_notas);
router.get('/Vernotas', Ver_notas);

export default routercl;