import { SkillModel } from '../models/skills.model.js';

export const getAllSkills = async (req, res) => {
  const skills = await SkillModel.findAll();
  return res.json(skills);
};

export const createSkill = async (req, res) => {
  const { skillName, skillProgress } = req.body; // Alteração feita aqui
  const createdSkill = await SkillModel.create({ skillName, skillProgress }); // Alteração feita aqui
  return res.json(createdSkill);
};

export const updateSkill = async (req, res) => {
  const { skillName, skillProgress } = req.body; // Alteração feita aqui
  const skillId = req.params.id;
  const updatedSkill = await SkillModel.update({ skillName, skillProgress }, {
    where: { id: skillId }
  });
  return res.json(updatedSkill);
};

export const deleteSkill = async (req, res) => {
  const skillId = req.params.id;
  await SkillModel.destroy({
    where: { id: skillId }
  });
  return res.json({ message: 'Skill deleted successfully' });
};
