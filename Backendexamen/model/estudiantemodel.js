import { DataTypes } from "sequelize";
import {sequelize} from '../DB/conexiondb.js';
import {profesormodel} from '../model/profesormodel.js';

export const Estudiante = sequelize.define(
  'Datos',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Nombree: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellidoe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Identificacione: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    Cursoe:{
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
    },
  {
    timestamps: false,
  },
);