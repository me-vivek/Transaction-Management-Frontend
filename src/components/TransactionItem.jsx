export default function TransactionItem({ tx, onEdit, onDelete }) {
  return (
    <div className="flex justify-between p-3 border rounded bg-gray-50">
      <div>
        <h3 className="font-bold">
          {tx.category} - {tx.type}
        </h3>
        <p>{tx.description || "No description"}</p>
        <p className="text-sm text-gray-500">
          ${tx.amount} | {new Date(tx.timestamp).toLocaleString()}
        </p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => onEdit(tx)}
          className="text-blue-500 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(tx._id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
