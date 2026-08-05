import express from "express";
import { prisma } from "./lib/prisma.js";
import { userRoutes } from "./routes/user.routes.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/ping", async (req, res) => {
    try {
        await prisma.$queryRaw`SELECT 1`;
        res.json({
            message:
                "API rodando e Banco conectado com sucesso via Prisma Adapter!",
        });
    } catch (error) {
        res.status(500).json({ error: "Erro ao conectar no banco" });
    }
});

app.use("/api", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
