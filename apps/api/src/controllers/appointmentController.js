import { Appointment } from '../models/Appointment.js';
import { sendNotification } from '../services/notificationService.js';

export async function createAppointment(req, res) {
  const appointment = await Appointment.create(req.body);
  const notification = sendNotification({
    channel: 'email',
    recipient: 'patient@example.com',
    message: `Appointment ${appointment._id} is scheduled.`
  });
  res.status(201).json({ appointment, notification });
}

export async function updateAppointmentStatus(req, res) {
  const appointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(appointment);
}
