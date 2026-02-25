import test from 'node:test';
import assert from 'node:assert/strict';
import { detectAbnormalLabValues, predictBedOccupancy, smartTriageRecommendation } from './aiService.js';

test('predictBedOccupancy returns weighted occupancy', () => {
  assert.equal(predictBedOccupancy([70, 75, 80]), 81);
});

test('detectAbnormalLabValues flags out-of-range values', () => {
  const result = detectAbnormalLabValues([
    { type: 'glucose', value: 65 },
    { type: 'hemoglobin', value: 15 }
  ]);
  assert.equal(result.length, 1);
});

test('smartTriageRecommendation identifies critical cases', () => {
  const recommendation = smartTriageRecommendation({ heartRate: 90, systolicBP: 88, oxygen: 95 });
  assert.match(recommendation, /Critical/);
});
