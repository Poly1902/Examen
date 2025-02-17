import {Registroprofesor} from '../controller/profesorcontroller.js';
import express from 'express';
const router = express.Router();

router.post('/AgregarP', Registroprofesor);


export default routerP;
