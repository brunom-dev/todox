import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export class TaskController {
    async create(req: Request, res: Response) {
        try {
            const { title, description, status, dueDate, categoryId, goalId } =
                req.body;
            const userId = req.userId;

            if (!title) {
                return res.status(400).json({ error: "Título é obrigatório." });
            }

            const task = await prisma.task.create({
                data: {
                    title,
                    description,
                    status,
                    dueDate: dueDate ? new Date(dueDate) : null,
                    categoryId,
                    goalId,
                    userId,
                },
            });

            return res.status(201).json(task);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno." });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const userId = req.userId;

            const tasks = await prisma.task.findMany({
                where: { userId },
                include: {
                    category: true,
                    goal: true,
                },
            });

            return res.json(tasks);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno." });
        }
    }
}
