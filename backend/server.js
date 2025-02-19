import express from 'express';
import cors from 'cors';
import connectDB from './utils/db.js';
import transactionRoutes from './routes/TransactionRoutes.js';

const app = express();
const PORT = 10000;

// Middleware
app.use(cors({ origin: 'https://transaction-tracking-app-rumh.vercel.app/' }));
app.use(express.json());

// Routes
app.use('/api/transactions', transactionRoutes);

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});