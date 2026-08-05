import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

interface TokenPayload extends JwtPayload {
    id: string;
}

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Token não fornecido." });
    }

    const [, token] = authHeader.split(" ");

    if (!token) {
        return res.status(401).json({ error: "Token não fornecido." });
    }

    try {
        const secret = process.env.JWT_SECRET as string;

        const decoded = jwt.verify(token, secret);

        if (typeof decoded === "string") {
            return res.status(401).json({ error: "Token inválido." });
        }

        req.userId = decoded.id;
        return next();
    } catch (error) {
        return res.status(401).json({ error: "Token inválido." });
    }
}
