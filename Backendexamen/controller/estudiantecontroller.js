import {estudiantemodel} from "../model/estudiantemodel.js";

export const Registroestudiante = async (req, res) => {
    try {
        const { Nombree, Apellidoe, Identificacione, Cursoe, ProfesorId } = req.body;
        const est = await estudiantemodel.create({
            nombree : Nombree,
            apellidoe : Apellidoe,
            identificacione : Identificacione,
            cursoe: Cursoe,
            profesorid : ProfesorId,
        });

        res.json({ user: est, 'message': 'Estudiante ingresado Correctamente'});
    }
    catch (error) {
        res.status(500).json({ message: 'Error: ' + error });
    }
};