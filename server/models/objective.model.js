import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';

const ObjectiveModel = database.define(
  'objective',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: STRING,
      allowNull: false,
    },
  }
);

export { ObjectiveModel };
