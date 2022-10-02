import express, { Application } from 'express';
import { UserController } from './controllers/user';

const app: Application = express();
app.use(express.json());

// -----------controllers instances
const userController = new UserController();

// -----------routes
// users
app.get('/get-users', userController.getUsers);
app.get('/get-user/:id', userController.getUser);
app.post('/save-user/', userController.saveUser);
app.delete('/delete-user/:id', userController.deleteUser);

export default app;
