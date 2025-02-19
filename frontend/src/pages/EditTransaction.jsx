import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTransactions } from '../context/TransactionContext';
import TransactionForm from '../components/TransactionForm';
import { Link } from 'react-router-dom';
const EditTransaction = () => {
  const { id } = useParams(); // Get the transaction ID from the URL
  const navigate = useNavigate();
  const { transactions, editTransaction } = useTransactions();
  const [transaction, setTransaction] = useState(null);

  // Fetch the transaction data when the component mounts
  useEffect(() => {
    const fetchTransaction = () => {
      const foundTransaction = transactions.find((t) => t._id === id);
      if (foundTransaction) {
        setTransaction(foundTransaction);
      } else {
        navigate('/transactions'); // Redirect if the transaction is not found
      }
    };

    fetchTransaction();
  }, [id, transactions, navigate]);

  // Handle form submission
  const handleFormSubmit = (data) => {
    editTransaction(id, data); // Update the transaction
    navigate('/alltransactions'); // Redirect back to the transactions page
  };

  if (!transaction) {
    return <div>Loading...</div>; // Show a loading state while fetching the transaction
  }

  return (
    <div className="p-6 space-y-6 h-full bg-gray-900">
       
      <h1 className="text-3xl text-white font-bold">Edit Transaction</h1>
      <Link to="/">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Home
          </button>
        </Link>
      <TransactionForm
        onSubmit={handleFormSubmit}
        initialData={transaction} // Pre-fill the form with the transaction data
      />
    </div>
  );
};

export default EditTransaction;