import {Calificacionesmodel} from '../model/Calificacionesmodel.js';
import {estudiantemodel} from '../model/estudiantemodel.js';
import {profesormodel} from '../model/profesormodel.js';

export const Asignacion_notas = async (req, res) => {
    try {
        const { EstudianeId, Nota } = req.body;
        const Estudiante = await Estudiante.findByPk(EstudianeId);
        if (!Estudiante) return res.status(404).json({ message: 'Estudiante no encontrado' });
        if (Nota < 0 || Nota > 10) return res.status(400).json({ message: 'Nota inválida, debe estar entre 0 y 10' });
        
        const Notas = await Notas.create({ EstudianeId, Nota });
        res.status(201).json({ Notas, message: 'Calificación asignada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const Ver_notas = async (req, res) => {
    try {
        const Notas = await Notas.findAll({
            where: { estudianteId: req.params.id },
            include: [{ model: Estudiante, include: [Profesor] }]
        });
        res.json(Notas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};