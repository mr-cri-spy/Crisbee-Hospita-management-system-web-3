import { Router } from 'express';
import { createAppointment, updateAppointmentStatus } from '../controllers/appointmentController.js';
import { requireRole } from '../middleware/auth.js';

const router = Router();

router.post('/', requireRole('write:appointments'), createAppointment);
router.patch('/:id/status', requireRole('write:appointments'), updateAppointmentStatus);

export default router;
