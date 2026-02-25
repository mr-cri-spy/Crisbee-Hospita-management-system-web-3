import { Router } from 'express';
import { analyzeLabs, getBedPrediction, triage } from '../controllers/aiController.js';

const router = Router();

router.post('/bed-occupancy', getBedPrediction);
router.post('/lab-anomaly', analyzeLabs);
router.post('/triage', triage);

export default router;
