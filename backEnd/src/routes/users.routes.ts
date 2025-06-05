import { Router } from 'express';
import { registerUser, listUsers } from '../controllers/UserController';

const router = Router();

router.post('/', registerUser);
router.get('/', listUsers);

export default router;