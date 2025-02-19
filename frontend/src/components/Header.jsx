// frontend/src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Personal Finance Visualizer</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Dashboard</Link>
            </li>
            <li>
              <Link to="/transactions" className="hover:underline">Transactions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;