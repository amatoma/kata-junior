import { initDB } from '../database/db';
import { User } from '../models/UserModel';

export const createUser = async (user: User) => {
  const db = await initDB();
  const result = await db.run(
    `INSERT INTO usuarios 
     (nombre, correo, estado, fecha_ingreso, onboarding_bienvenida, onboarding_tecnico, fecha_onboarding_tecnico) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    user.nombre,
    user.correo,
    user.estado,
    user.fechaIngreso,
    user.onboardingBienvenida ? 1 : 0,
    user.onboardingTecnico ? 1 : 0,
    user.fechaOnboardingTecnico || null
  );
  return { id: result.lastID, ...user };
};

export const getUsers = async (): Promise<User[]> => {
  const db = await initDB();
  const rows = await db.all('SELECT * FROM usuarios');

  return rows.map((row: any) => ({
    id: row.id,
    nombre: row.nombre,
    correo: row.correo,
    estado: row.estado,
    fechaIngreso: row.fecha_ingreso,
    onboardingBienvenida: row.onboarding_bienvenida === 1,
    onboardingTecnico: row.onboarding_tecnico === 1,
    fechaOnboardingTecnico: row.fecha_onboarding_tecnico
  }));
};

export const getUserById = async (id: string): Promise<User | null> => {
  const db = await initDB();
  const row = await db.get('SELECT * FROM usuarios WHERE id = ?', id);

  if (!row) return null;

  return {
    id: row.id,
    nombre: row.nombre,
    correo: row.correo,
    estado: row.estado,
    fechaIngreso: row.fecha_ingreso,
    onboardingBienvenida: row.onboarding_bienvenida === 1,
    onboardingTecnico: row.onboarding_tecnico === 1,
    fechaOnboardingTecnico: row.fecha_onboarding_tecnico
  };
};

 
