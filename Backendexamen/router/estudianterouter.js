import {Registroestudiante} from '../controller/estudiantecontroller.js'
import express from 'express';
const router = express.Router();

router.post('/Registro de Estudiantes', Registroestudiante);

export default routeres;