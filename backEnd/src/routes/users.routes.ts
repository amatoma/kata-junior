import { Router } from 'express';
import { registerUser, listUsers, getUserById } from '../controllers/UserController';

const router = Router();

router.post('/', registerUser);
router.get('/', listUsers);
router.get('/:id', getUserById);
export default router;