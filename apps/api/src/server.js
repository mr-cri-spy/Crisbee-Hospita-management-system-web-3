import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { connectDb } from './config/db.js';
import patientRoutes from './routes/patientRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import aiRoutes from './routes/aiRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', name: 'Crisbee Hospital API' }));
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/ai', aiRoutes);

connectDb()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`API running on port ${env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB connection failed', err);
    process.exit(1);
  });
