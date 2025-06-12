import { useEffect, useState } from "react";
import {
  getTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} from "./services/api";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editTx, setEditTx] = useState(null);

  const loadTransactions = async () => {
    const res = await getTransactions();
    setTransactions(res.data);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  const handleSubmit = async (data) => {
    if (editTx) {
      await updateTransaction(editTx._id, data);
      setEditTx(null);
    } else {
      await createTransaction(data);
    }
    loadTransactions();
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    loadTransactions();
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Transaction Manager
      </h1>
      <TransactionForm onSubmit={handleSubmit} editData={editTx} />
      <div className="mt-6">
        <TransactionList
          data={transactions}
          onEdit={setEditTx}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
