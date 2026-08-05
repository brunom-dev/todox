import { Router } from "express";
import { TaskController } from "../controllers/task.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const taskRoutes = Router();
const taskController = new TaskController();

taskRoutes.use(authMiddleware);

taskRoutes.post("/tasks", taskController.create);
taskRoutes.get("/tasks", taskController.list);

export { taskRoutes };
