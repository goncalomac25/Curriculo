import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';

const LanguageModel = database.define(
  'language',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    languageName: {
      type: STRING,
      allowNull: false,
    },
  }
);

export { LanguageModel };
