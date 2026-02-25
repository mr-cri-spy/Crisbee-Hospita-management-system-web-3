import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema(
  {
    name: String,
    category: { type: String, enum: ['Medicine', 'Equipment', 'Consumable'] },
    quantity: Number,
    expiryDate: Date
  },
  { timestamps: true }
);

export const InventoryItem = mongoose.model('InventoryItem', inventorySchema);
