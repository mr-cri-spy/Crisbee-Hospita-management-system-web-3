import { Patient } from '../models/Patient.js';
import { uploadToIpfsMock } from '../services/ipfsService.js';

export async function registerPatient(req, res) {
  const patient = await Patient.create(req.body);
  res.status(201).json(patient);
}

export async function getPatients(req, res) {
  const patients = await Patient.find().sort({ createdAt: -1 });
  res.json(patients);
}

export async function uploadMedicalReport(req, res) {
  const { id } = req.params;
  const hash = await uploadToIpfsMock(req.file?.buffer || Buffer.from('empty'));
  const patient = await Patient.findByIdAndUpdate(id, { $push: { reportHashes: hash } }, { new: true });
  res.json({ patient, ipfsHash: hash });
}
