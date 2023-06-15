import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';

const SkillModel = database.define('skills', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  skillName: {
    type: STRING,
    allowNull: false,
  },
});

export { SkillModel };
