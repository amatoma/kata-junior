import { initDB } from '../database/db';

export const asignarComputador = async (asignacion: {
  nombre_usuario: string;
  equipo: string;
  numero_serie: string;
  fecha_entrega: string;
}) => {
  const db = await initDB();
  const result = await db.run(
    'INSERT INTO asignaciones_computadores (nombre_usuario, equipo, numero_serie, fecha_entrega) VALUES (?, ?, ?, ?)',
    asignacion.nombre_usuario,
    asignacion.equipo,
    asignacion.numero_serie,
    asignacion.fecha_entrega
  );
  return { id: result.lastID, ...asignacion };
};

export const obtenerAsignaciones = async () => {
  const db = await initDB();
  const rows = await db.all('SELECT * FROM asignaciones_computadores');
  return rows;
};
