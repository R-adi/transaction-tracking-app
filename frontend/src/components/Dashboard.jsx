import { useEffect, useState } from 'react';
import { useTransactions } from '../context/TransactionContext';
import MonthlyExpensesChart from '../components/MonthlyExpensesChart';
import CategoryPieChart from '../components/CategoryPieChart';

const Dashboard = () => {
  const { transactions } = useTransactions();
  const [isLoading, setIsLoading] = useState(true);

  // Ensure transactions is an array
  useEffect(() => {
    if (Array.isArray(transactions)) {
      setIsLoading(false);
    }
  }, [transactions]);

  // Show loading state while transactions are being fetched
  if (isLoading) {
    return <div className="p-6">Loading transactions...</div>;
  }

  // Check if transactions is an array (double safety)
  if (!Array.isArray(transactions)) {
    return <div className="p-6">Error: Transactions data is invalid.</div>;
  }

  // Calculate total expenses
  const totalExpenses = transactions.reduce((sum, t) => sum + t.amount, 0);

  // Calculate category breakdown
  const categoryBreakdown = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {});

  // Prepare data for monthly expenses chart
  const monthlyExpensesData = Object.entries(
    transactions.reduce((acc, t) => {
      const month = new Date(t.date).toLocaleString('default', { month: 'short' });
      acc[month] = (acc[month] || 0) + t.amount;
      return acc;
    }, {})
  ).map(([month, expenses]) => ({ month, expenses }));

  // Prepare data for category pie chart
  const categoryPieData = Object.entries(categoryBreakdown).map(([category, amount]) => ({
    name: category,
    value: amount,
  }));

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold">Total Expenses</h2>
          <p className="text-2xl">₹{totalExpenses.toFixed(2)}</p>
        </div>
        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold">Category Breakdown</h2>
          <ul>
            {Object.entries(categoryBreakdown).map(([category, amount]) => (
              <li key={category}>
                {category}: ₹{amount.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <ul>
            {transactions.slice(0, 3).map((t) => (
              <li key={t._id}>
                ₹{t.amount} - {t.description}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MonthlyExpensesChart data={monthlyExpensesData} />
        <CategoryPieChart data={categoryPieData} />
      </div>
    </div>
  );
};

export default Dashboard;