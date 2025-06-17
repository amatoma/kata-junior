import { initDB } from './db';

(async () => {
  const db = await initDB();

  await db.exec(`DROP TABLE IF EXISTS usuarios`);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      correo TEXT,
      estado TEXT,
      fecha_ingreso TEXT,
      onboarding_bienvenida INTEGER,  -- 0 o 1 (false/true)
      onboarding_tecnico INTEGER,     -- 0 o 1 (false/true)
      fecha_onboarding_tecnico TEXT
    );
  `);

  await db.exec(`DELETE FROM usuarios;`);

  

  console.log("Tablas usuarios  creadas correctamente.");
})();
