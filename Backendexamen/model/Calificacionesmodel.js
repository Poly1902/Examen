import { DataTypes } from "sequelize";
import {sequelize} from '../DB/conexiondb.js';
import {profesormodel} from '../model/profesormodel.js';
import {estudiantemodel} from '../model/estudiantemodel.js';

export const Notas = sequelize.define(
  'Cal',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Nota: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ProfesorId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: profesormodel,
        key: 'id',
          },
    },
    EstudianeId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: estudiantemodel,
        key: 'id',
          },
      },
    },
  {
    timestamps: false,
  },
);
Profesor.hasMany(Estudiante, { foreignKey: 'ProfesorId' });
Estudiante.belongsTo(Profesor, { foreignKey: 'ProfesorId' });
Estudiante.hasMany(Notas, { foreignKey: 'EstudianeId' });
Notas.belongsTo(Estudiante, { foreignKey: 'EstudianeId' });
