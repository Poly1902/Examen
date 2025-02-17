import {profesormodel} from "../model/profesormodel.js";

export const Registroprofesor = async (req, res) => {
    try {
        const { Nombre, Apellido, Identificacion, Especialidad } = req.body;
        const prof = await profesormodel.create({
            nombre : Nombre,
            apellido : Apellido,
            identificacion : Identificacion,
            especialidad: Especialidad,
        });

        res.json({ user: prof, 'message': 'Profesor ingresado Correctamente'});
    }
    catch (error) {
        res.status(500).json({ message: 'Error: ' + error });
    }
};