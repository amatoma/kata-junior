import { initDB } from './db';

(async () => {
  const db = await initDB();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      correo TEXT,
      area TEXT,
      rol TEXT,
      estado TEXT
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS access_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      correo TEXT,
      accesos_solicitados TEXT, -- ← Aquí guardamos el array como string JSON
      estado TEXT DEFAULT 'pendiente'
    );
  `);

  await db.exec(`
  CREATE TABLE IF NOT EXISTS asignaciones_computadores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_usuario TEXT,
    equipo TEXT,
    numero_serie TEXT,
    fecha_entrega TEXT
  );
`);

  console.log("Tablas usuarios y access_requests creadas correctamente.");
})();
