import { detectAbnormalLabValues, predictBedOccupancy, smartTriageRecommendation } from '../services/aiService.js';

export function getBedPrediction(req, res) {
  const prediction = predictBedOccupancy(req.body.history || [72, 80, 75, 78, 81]);
  res.json({ prediction });
}

export function analyzeLabs(req, res) {
  const abnormalities = detectAbnormalLabValues(req.body.labs || []);
  res.json({ abnormalities });
}

export function triage(req, res) {
  const recommendation = smartTriageRecommendation(req.body);
  res.json({ recommendation });
}
