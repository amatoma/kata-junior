import { initDB } from '../database/db';
import { User } from '../models/UserModel';

export const createUser = async (user: User) => {
  const db = await initDB();
  const result = await db.run(
    'INSERT INTO usuarios (nombre, correo, area, rol, estado) VALUES (?, ?, ?, ?, ?)',
    user.nombre, user.correo, user.area, user.rol, user.estado
  );
  return { id: result.lastID, ...user };
};

export const getUsers = async (): Promise<User[]> => {
  const db = await initDB();
  return db.all('SELECT * FROM usuarios');
};