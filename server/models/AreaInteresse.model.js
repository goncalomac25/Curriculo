import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';

const AreaInteresseModel = database.define(
  'area_interesse',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: STRING,
      allowNull: false,
    },
  }
);

export { AreaInteresseModel };
