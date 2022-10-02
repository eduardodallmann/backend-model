import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';
import { User } from '../entities/user';
import { UserService } from '../services/user';
import { ResponseMessage } from '../types';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUsers = async (_req: Request, res: Response<Array<User>>) => {
    const users = await this.userService.getUsers();

    return res.send(users);
  };

  getUser = async (req: Request<{ id: string }>, res: Response<User>) => {
    const user = await this.userService.getUser(Number(req.params.id));

    if (!user) {
      return res.status(404).end();
    }

    return res.send(user);
  };

  saveUser = async (
    req: Request<undefined, undefined, User>,
    res: Response<User | ResponseMessage>,
  ) => {
    try {
      const {
        id, firstName, lastName, age,
      } = req.body;
      if (!firstName || !age) {
        return res.status(400).send({ message: 'Incomplete body' });
      }

      return res
        .status(201)
        .send(
          await this.userService.saveUser({
            id, firstName, lastName, age,
          }),
        );
    } catch (error) {
      return res.status(500).send({ message: 'Something bad happened' });
    }
  };

  deleteUser = async (
    req: Request<{ id: string }>,
    res: Response<DeleteResult | ResponseMessage>,
  ) => {
    try {
      const result = await this.userService.deleteUser(Number(req.params.id));

      if (!result.affected) {
        return res.status(404).end();
      }

      return res.send(result);
    } catch (error) {
      return res.status(500).send({ message: 'Something bad happened' });
    }
  };
}
