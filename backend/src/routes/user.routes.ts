import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';
import { AuthController } from '../controllers/auth.controller.js'; 

const userRoutes = Router();
const userController = new UserController();
const authController = new AuthController(); 

userRoutes.post('/users', userController.create);
userRoutes.post('/login', authController.login); 

export { userRoutes };