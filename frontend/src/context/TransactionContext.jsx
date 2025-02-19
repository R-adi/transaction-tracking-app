import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]); // Initialize as empty array

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`https://transaction-tracking-app-u74o.onrender.com/api/transactions`);
      console.log('Fetched Transactions:', response.data); // Debugging
      setTransactions(Array.isArray(response.data) ? response.data : []); // Ensure array
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setTransactions([]); // Reset to empty array on error
    }
  };
  
 const API_BASE_URL="https://transaction-tracking-app-u74o.onrender.com/api";
  const addTransaction = async (transaction) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/transactions`, transaction);
      setTransactions([response.data, ...transactions]);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const editTransaction = async (id, updatedTransaction) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/transactions/${id}`, updatedTransaction);
      setTransactions(
        transactions.map((t) => (t._id === id ? response.data : t))
      );
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/transactions/${id}`);
      setTransactions(transactions.filter((t) => t._id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction, editTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);