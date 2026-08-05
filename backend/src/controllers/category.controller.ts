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

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id || Array.isArray(id)) {
                return res.status(400).json({ error: "ID inválido." });
            }

            const { name, color, parentId } = req.body;
            const userId = req.userId;

            const category = await prisma.category.findUnique({
                where: { id },
            });

            if (!category || category.userId !== userId) {
                return res
                    .status(404)
                    .json({ error: "Categoria não encontrada." });
            }

            const updatedCategory = await prisma.category.update({
                where: { id },
                data: {
                    name,
                    color,
                    parentId,
                },
            });

            return res.json(updatedCategory);
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

            const category = await prisma.category.findUnique({
                where: { id },
            });

            if (!category || category.userId !== userId) {
                return res
                    .status(404)
                    .json({ error: "Categoria não encontrada." });
            }

            await prisma.category.delete({
                where: { id },
            });

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: "Erro interno." });
        }
    }
}
