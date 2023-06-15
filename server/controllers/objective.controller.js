import { ObjectiveModel } from '../models/objective.model.js';

export const getAllObjectives = async (req, res) => {
  const objectives = await ObjectiveModel.findAll();
  return res.json(objectives);
};

export const createObjective = async (req, res) => {
  const { description } = req.body;
  const createdObjective = await ObjectiveModel.create({ description });
  return res.json(createdObjective);
};

export const updateObjective = async (req, res) => {
  const objectiveId = req.params.id;
  const { description } = req.body;

  await ObjectiveModel.update({ description }, { where: { id: objectiveId } });

  return res.json({ message: 'Objective updated successfully.' });
};

export const deleteObjective = async (req, res) => {
  const objectiveId = req.params.id;

  await ObjectiveModel.destroy({ where: { id: objectiveId } });

  return res.json({ message: 'Objective deleted successfully.' });
};
