import { useState, useEffect } from "react";

const initialState = {
  type: "credit",
  amount: "",
  category: "food",
  description: "",
};

export default function TransactionForm({ onSubmit, editData }) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md space-y-4"
    >
      <div className="flex space-x-4">
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="p-2 border rounded w-1/2"
        >
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="p-2 border rounded w-1/2"
        />
      </div>
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="p-2 border rounded w-full"
      >
        <option value="food">Food</option>
        <option value="travel">Travel</option>
        <option value="billing">Billing</option>
        <option value="others">Others</option>
      </select>
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="p-2 border rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {editData ? "Update" : "Add"} Transaction
      </button>
    </form>
  );
}
