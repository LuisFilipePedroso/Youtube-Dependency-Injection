import { Router, Request, Response } from 'express';
import UserRepository from "../repositories/UserRepository";

// import TypeOrmUserRepository from '../repositories/typeorm/UserRepository';
import MikroORMUserRepository from '../repositories/mikroorm/UserRepository';

const routes = Router();

const userRepository = new UserRepository(new MikroORMUserRepository());

routes.get('/users', async (request: Request, response: Response) => {
    const users = await userRepository.find();
    return response.json(users);
})

routes.post('/users', async (request: Request, response: Response) => {
    const user = await userRepository.create(request.body);
    return response.json(user);
})

export default routes;
