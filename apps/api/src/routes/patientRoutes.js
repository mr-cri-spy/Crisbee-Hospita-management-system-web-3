import { Router } from 'express';
import multer from 'multer';
import { getPatients, registerPatient, uploadMedicalReport } from '../controllers/patientController.js';
import { requireRole } from '../middleware/auth.js';

const router = Router();
const upload = multer();

router.get('/', requireRole('read:all'), getPatients);
router.post('/', requireRole('write:appointments'), registerPatient);
router.post('/:id/reports', requireRole('write:emr'), upload.single('report'), uploadMedicalReport);

export default router;
