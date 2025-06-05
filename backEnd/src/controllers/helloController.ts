import { Request, Response } from 'express';

export const sayHello = (req: Request, res: Response): void => {
  res.json({ message: 'Hola desde Express con TypeScript 🚀' });
};