import { INTEGER, STRING, DATE } from 'sequelize';
import { database } from '../config/context/database.js';

const EducationModel = database.define(
  'education',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    institution: {
      type: STRING,
      allowNull: false,
    },
    degree: {
      type: STRING,
      allowNull: false,
    },
    duration: {
      type: STRING,
      allowNull: false,
    },
  }
);

export { EducationModel };
