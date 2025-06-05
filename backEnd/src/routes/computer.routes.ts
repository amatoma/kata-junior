import { Router } from 'express';
import { crearAsignacion, listarAsignaciones } from '../controllers/ComputerAssignmentController';

const router = Router();

router.post('/', crearAsignacion);
router.get('/', listarAsignaciones);

export default router;
