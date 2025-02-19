import express from 'express';
import Transaction from '../models/Transaction.js';

const router = express.Router();

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
    console.log("hii");
    res.json({message:"hello"});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions' });
  }
});

// Add a transaction
router.post('/', async (req, res) => {
  const { amount, date, description, category } = req.body;
  const newTransaction = new Transaction({ amount, date, description, category });

  try {
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).json({ message: 'Error adding transaction' });
  }
});

// Delete a transaction
router.delete('/:id', async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: 'Transaction deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting transaction' });
  }
});

// Edit a transaction
router.put('/:id', async (req, res) => {
    const { id } = req.params; // Extract the transaction ID from the URL
    const { amount, date, description, category } = req.body;
  
    try {
      const updatedTransaction = await Transaction.findByIdAndUpdate(
        id, // Use the ID to find the transaction
        { amount, date, description, category }, // New data to update
        { new: true } // Return the updated transaction
      );
  
      if (!updatedTransaction) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
  
      res.json(updatedTransaction); // Send the updated transaction as the response
    } catch (error) {
      res.status(500).json({ message: 'Error updating transaction' });
    }
  });

export default router;