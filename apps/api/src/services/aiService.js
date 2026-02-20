export function predictBedOccupancy(history) {
  const avg = history.reduce((sum, val) => sum + val, 0) / Math.max(history.length, 1);
  return Math.min(100, Math.round(avg * 1.08));
}

export function detectAbnormalLabValues(labs) {
  return labs.filter((lab) => {
    if (lab.type === 'glucose') return lab.value < 70 || lab.value > 140;
    if (lab.type === 'hemoglobin') return lab.value < 12 || lab.value > 18;
    return false;
  });
}

export function smartTriageRecommendation({ heartRate, systolicBP, oxygen }) {
  if (oxygen < 90 || systolicBP < 90) return 'Critical - Immediate emergency response';
  if (heartRate > 120 || heartRate < 50) return 'High - Doctor assessment in <10 minutes';
  return 'Moderate - Standard emergency queue';
}
