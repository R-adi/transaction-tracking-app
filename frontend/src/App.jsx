import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import AllTransactions from './pages/AllTransactions';
import { TransactionProvider } from './context/TransactionContext';
import EditTransaction from './pages/EditTransaction';

const App = () => {
  return (
    <Router>
      <TransactionProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/alltransactions" element={<AllTransactions />} />
          <Route path="/transactions/:id/edit" element={<EditTransaction />} />
        </Routes>
      </TransactionProvider>
    </Router>
  );
};

export default App;