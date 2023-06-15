import { AreaInteresseModel } from '../models/AreaInteresse.model.js';

export const getAllAreasInteresse = async (req, res) => {
  try {
    const areasInteresse = await AreaInteresseModel.findAll();
    return res.json(areasInteresse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const createAreaInteresse = async (req, res) => {
  const { nome } = req.body;

  try {
    const createdAreaInteresse = await AreaInteresseModel.create({ nome });
    return res.status(201).json(createdAreaInteresse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateAreaInteresse = async (req, res) => {
    const areaInteresseId = req.params.id;
    const { description } = req.body;
  
    await AreaInteresseModel.update({ description }, { where: { id: objectiveId } });
  
    return res.json({ message: 'Objective updated successfully.' });
  };
  

export const deleteAreaInteresse = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAreaInteresse = await AreaInteresseModel.destroy({
      where: { id },
    });

    if (deletedAreaInteresse === 0) {
      return res.status(404).json({ error: 'Area de Interesse not found' });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
