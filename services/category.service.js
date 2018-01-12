import Category from '../models/Category';
import Question from '../models/Question';

class CategoryService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    const createdCategory = await this.repository.create(data);
    return createdCategory;
  }

  async findAll() {
    const allCategories = await this.repository.findAll({
      include: [{ model: Question }],
    });
    return allCategories;
  }

  async deleteOne(id) {
    await this.resourse.destroy({
      where: {
        id,
      },
    });
    return id;
  }
}

export const TestCategoryService = CategoryService;

export default new CategoryService(Category);
