import { Request, Response } from 'express';
import { asignarComputador, obtenerAsignaciones } from '../services/ComputerAssignmentService';

export const crearAsignacion = async (req: Request, res: Response) => {
  try {
    const nuevaAsignacion = await asignarComputador(req.body);
    res.status(201).json(nuevaAsignacion);
  } catch (error) {
    console.error('Error al asignar computador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const listarAsignaciones = async (_req: Request, res: Response) => {
  try {
    const asignaciones = await obtenerAsignaciones();
    res.json(asignaciones);
  } catch (error) {
    console.error('Error al obtener asignaciones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
