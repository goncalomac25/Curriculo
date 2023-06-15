import { EducationModel } from '../models/educacao.model.js';

export const getAllEducations = async (req, res) => {
  const educations = await EducationModel.findAll();
  return res.json(educations);
};

export const createEducation = async (req, res) => {
  const { institution, degree, duration } = req.body;
  const createdEducation = await EducationModel.create({
    institution,
    degree,
    duration,
  });
  return res.json(createdEducation);
};

export const updateEducation = async (req, res) => {
  const { institution, degree, duration } = req.body;
  const id = req.params.id;
  await EducationModel.update(
    { institution, degree, duration },
    { where: { id } }
  );
  return res.json({ message: 'Education updated successfully' });
};

export const deleteEducation = async (req, res) => {
  const id = req.params.id;
  await EducationModel.destroy({ where: { id } });
  return res.json({ message: 'Education deleted successfully' });
};
