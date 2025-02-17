import { DataTypes } from "sequelize";
import { sequelize } from '../DB/conexiondb.js';

export const Profesor = sequelize.define(
  'Informacion',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Identificacion: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    Especialidad: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    },
  {
    timestamps: false,
  },
);