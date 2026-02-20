import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctorId: String,
    scheduledAt: Date,
    status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' }
  },
  { timestamps: true }
);

export const Appointment = mongoose.model('Appointment', appointmentSchema);
