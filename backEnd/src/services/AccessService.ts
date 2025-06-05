import { initDB } from '../database/db';
import { AccessRequest } from '../models/AccessModel';

export const createAccessRequest = async (access: AccessRequest) => {
  const db = await initDB();
  const result = await db.run(
    'INSERT INTO access_requests (nombre, correo, accesos_solicitados, estado) VALUES (?, ?, ?, ?)',
    access.nombre,
    access.correo,
    JSON.stringify(access.accesosSolicitados), // Se guarda como JSON string
    access.estado
  );

  return {
    id: result.lastID,
    ...access
  };
};

export const getAccessRequests = async (): Promise<AccessRequest[]> => {
  const db = await initDB();
  const rows = await db.all('SELECT * FROM access_requests');

  return rows.map(row => ({
    id: row.id,
    nombre: row.nombre,
    correo: row.correo,
    estado: row.estado,
    accesosSolicitados: row.accesos_solicitados
      ? JSON.parse(row.accesos_solicitados)
      : [] // 👈 lo devolvemos como array
  }));
};

