import { useNavigate } from 'react-router-dom';

const TransactionList = ({ transactions, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction._id} className="p-4 flex-row border bg-blue-100 rounded">
          <p className='p-1 font-semibold'>Amount: ${transaction.amount}</p>
          <p className='p-1 from-neutral-800'>Date: {new Date(transaction.date).toLocaleDateString()}</p>
          <p className='p-1'>Description: {transaction.description}</p>
          <p className='p-1'>Category: {transaction.category}</p>
          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => navigate(`/transactions/${transaction._id}/edit`)} // Navigate to the edit page
              className="bg-blue-900 text-white px-2 py-1 hover:cursor-pointer rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(transaction._id)}
              className="bg-red-500 text-white px-2 py-1 hover:cursor-pointer rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;