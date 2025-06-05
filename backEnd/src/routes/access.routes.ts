import { Router } from 'express';
import { registerAccessRequest, listAccessRequests } from '../controllers/AccessController';

const router = Router();

router.post('/', registerAccessRequest);
router.get('/', listAccessRequests);

export default router;
