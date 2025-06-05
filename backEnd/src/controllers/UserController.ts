import { Request, Response } from 'express';
import { createUser, getUsers } from '../services/UserService';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { nombre, correo, area, rol } = req.body;
    const user = await createUser({ nombre, correo, area, rol, estado: 'pendiente' });
    console.log(`Solicitud enviada a TI: tecnologia@pruebas.com.co`);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};

export const listUsers = async (_: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};
