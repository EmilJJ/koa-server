import User from '../models/User';

class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    const createdUser = await this.repository.create(data);
    return createdUser;
  }
}

export const TestUserService = UserService;

export default new UserService(User);
