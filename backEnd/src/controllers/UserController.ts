// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { initDB } from '../database/db';
import { User } from '../models/UserModel';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const {
      nombre,
      correo,
      estado,
      fecha_ingreso,
      onboarding_bienvenida,
      onboarding_tecnico,
      fecha_onboarding_tecnico
    } = req.body;

    const db = await initDB();
    const result = await db.run(
      `INSERT INTO usuarios 
       (nombre, correo, estado, fecha_ingreso, onboarding_bienvenida, onboarding_tecnico, fecha_onboarding_tecnico)
       VALUES (?,?, ?, ?, ?, ?, ?)`,
      nombre,
      correo,
      estado,
      fecha_ingreso,
      onboarding_bienvenida,
      onboarding_tecnico,
      fecha_onboarding_tecnico
    );

    res.status(201).json({ id: result.lastID });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const listUsers = async (_req: Request, res: Response) => {
  try {
    const db = await initDB();
    const users = await db.all<User[]>('SELECT * FROM usuarios');
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const getUserById =  async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const db = await initDB();
    const user = await db.get<User>('SELECT * FROM usuarios WHERE id = ?', id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
