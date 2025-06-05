import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.routes';
import accessRoutes from './routes/access.routes';
import computerRoutes from './routes/computer.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/usuarios', userRoutes);
app.use('/api/access-requests', accessRoutes);
app.use('/api/asignaciones', computerRoutes);


app.listen(3000, () => console.log('🚀 Servidor corriendo en http://localhost:3000'));