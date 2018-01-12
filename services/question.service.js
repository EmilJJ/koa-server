import Question from '../models/Question';

class QuestionService {
  constructor(repository) {
    this.repository = repository;
  }
  async create(data) {
    const createdQuestion = await this.repository.create(data);
    return createdQuestion;
  }
  async getAll() {
    const allQuestions = await this.repository.findAll();
    return allQuestions;
  }
  async getAllByCategoryId(categoryId) {
    const questions = await this.repository.findAll({ where: { categoryId } });
    return questions;
  }
  async update(questionId, payload) {
    const updatedQuestionId = await this.repository.update(
      { ...payload },
      { where: { questionId } },
    );
    return updatedQuestionId;
  }
  async delete(questionId) {
    await this.repository.destroy({ where: { questionId } });
    return questionId;
  }
}

export const TestQuestionService = QuestionService;

export default new QuestionService(Question);
