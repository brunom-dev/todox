import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export class CategoryController {
    async create(req: Request, res: Response) {
        try {
            const { name, color, parentId } = req.body;
            const userId = req.userId;

            if (!name) {
                return res.status(400).json({ error: "Nome é obrigatório." });
            }

            const category = await prisma.category.create({
                data: {
                    name,
                    color,
                    parentId,
                    userId,
                },
            });

            return res.status(201).json(category);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno." });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const userId = req.userId;

            const categories = await prisma.category.findMany({
                where: { userId },
                include: {
                    children: true,
                },
            });

            return res.json(categories);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno." });
        }
    }
}
