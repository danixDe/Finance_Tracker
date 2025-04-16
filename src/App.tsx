import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Nav from "./pages/Nav";
import { Category } from './categories';
import { Dashboard } from './pages/Dashboard';
import { BudgetTracker } from './pages/BudgetTracker';
export type Transaction = {
  id: string;
  amount: number;
  date: Date;
  description: string;
  category: Category;
};

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  return (
    <Router>
      <div className="min-h-screen min-w-full bg-background">
        <Nav />
        <Routes>
          <Route path="/" element={<Home transactions = {transactions} setTransactions={setTransactions} />} />
          <Route path="/dashboard" element={<Dashboard transactions={transactions} />} />
          <Route path="/budget" element={<BudgetTracker transactions={transactions}/>} />
        </Routes>
      </div>
    </Router>
  );
  
  
}

export default App;