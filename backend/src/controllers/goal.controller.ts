import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export class GoalController {
    async create(req: Request, res: Response) {
        try {
            const { title, description, deadline } = req.body;
            const userId = req.userId;

            if (!title) {
                return res.status(400).json({ error: "Título é obrigatório." });
            }

            const goal = await prisma.goal.create({
                data: {
                    title,
                    description,
                    deadline: deadline ? new Date(deadline) : null,
                    userId,
                },
            });

            return res.status(201).json(goal);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno." });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const userId = req.userId;

            const goals = await prisma.goal.findMany({
                where: { userId },
                include: {
                    tasks: true,
                },
            });

            return res.json(goals);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno." });
        }
    }
}
