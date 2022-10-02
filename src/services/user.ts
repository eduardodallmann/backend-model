import { Repository } from 'typeorm';
import { appDataSource } from '../config/db';
import { User } from '../entities/user';

export class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = appDataSource.getRepository(User);
  }

  getUsers() {
    return this.userRepository.find();
  }

  getUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  saveUser(user: User) {
    return this.userRepository.save(user);
  }

  async deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}
