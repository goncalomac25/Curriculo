import { LanguageModel } from '../models/language.model.js';

export const getAllLanguages = async (req, res) => {
  const languages = await LanguageModel.findAll();
  return res.json(languages);
};

export const createLanguage = async (req, res) => {
  const { languageName, progress } = req.body;
  const createdLanguage = await LanguageModel.create({ languageName, progress });
  return res.json(createdLanguage);
};

export const updateLanguage = async (req, res) => {
  const { languageName, progress } = req.body;
  const updatedLanguage = await LanguageModel.update(
    { languageName, progress },
    { where: { id: req.params.id } }
  );
  return res.json(updatedLanguage);
};

export const deleteLanguage = async (req, res) => {
  const deletedLanguage = await LanguageModel.destroy({
    where: { id: req.params.id },
  });
  return res.json(deletedLanguage);
};
