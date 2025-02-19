import { useState } from 'react';
import { useTransactions } from '../context/TransactionContext';
import TransactionList from '../components/TransactionList';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AllTransactions = () => {
  const { transactions, addTransaction, deleteTransaction, editTransaction } = useTransactions();
  const [transactionToEdit, setTransactionToEdit] = useState(null); // Track transaction being edited

  // Handle form submission (both add and edit)
  const handleFormSubmit = (data) => {
    if (transactionToEdit) {
      // If editing, call editTransaction
      editTransaction(transactionToEdit._id, data);
      setTransactionToEdit(null); // Reset the form after editing
    } else {
      // If adding, call addTransaction
      addTransaction(data);
    }
  };

  // Handle edit button click
  const handleEdit = (id, transaction) => {
    setTransactionToEdit(transaction); // Set the transaction to edit
  };

  // Handle delete button click
  const handleDelete = (id) => {
    deleteTransaction(id); // Call deleteTransaction from context
  };

  return (
    <div className="p-6 space-y-6 bg-gray-900">
      <h1 className="text-3xl text-white font-bold">All Transactions</h1>
      <Link to="/">
       <Button className="mb-3 bg-blue-600 hover:cursor-pointer hover:bg-blue-500 ">
        Home
       </Button>
        </Link>

     

      {/* Transaction List */}
      <TransactionList
        transactions={transactions}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default AllTransactions;