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

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id || Array.isArray(id)) {
                return res.status(400).json({ error: "ID inválido." });
            }

            const { title, description, deadline } = req.body;
            const userId = req.userId;

            const goal = await prisma.goal.findUnique({
                where: { id },
            });

            if (!goal || goal.userId !== userId) {
                return res.status(404).json({ error: "Meta não encontrada." });
            }

            const updatedGoal = await prisma.goal.update({
                where: { id },
                data: {
                    title,
                    description,
                    deadline: deadline ? new Date(deadline) : null,
                },
            });

            return res.json(updatedGoal);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno." });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id || Array.isArray(id)) {
                return res.status(400).json({ error: "ID inválido." });
            }

            const userId = req.userId;

            const goal = await prisma.goal.findUnique({
                where: { id },
            });

            if (!goal || goal.userId !== userId) {
                return res.status(404).json({ error: "Meta não encontrada." });
            }

            await prisma.goal.delete({
                where: { id },
            });

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: "Erro interno." });
        }
    }
}
