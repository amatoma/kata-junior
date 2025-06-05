import { Request, Response } from 'express';
import { createAccessRequest, getAccessRequests } from '../services/AccessService';

export const registerAccessRequest = async (req: Request, res: Response) => {
  try {
    const newAccess = await createAccessRequest(req.body);
    res.status(201).json(newAccess);
  } catch (error) {
    console.error('Error al registrar acceso:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const listAccessRequests = async (_req: Request, res: Response) => {
  try {
    const accessList = await getAccessRequests();
    res.json(accessList);
  } catch (error) {
    console.error('Error al obtener accesos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

