import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    dob: Date,
    walletAddress: { type: String, required: true, unique: true },
    medicalHistory: [{ condition: String, notes: String, diagnosedAt: Date }],
    reportHashes: [String]
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
