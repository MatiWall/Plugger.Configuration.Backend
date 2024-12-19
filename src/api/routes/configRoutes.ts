import { Router } from 'express';
import { getConfig } from  '../controllers/configController'

const router = Router();

router.get('/config', getConfig);

export default router;
