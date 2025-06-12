import TransactionItem from "./TransactionItem";

export default function TransactionList({ data, onEdit, onDelete }) {
  if (!data.length) return <p>No transactions yet.</p>;

  return (
    <div className="space-y-4">
      {data.map((tx) => (
        <TransactionItem
          key={tx._id}
          tx={tx}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
