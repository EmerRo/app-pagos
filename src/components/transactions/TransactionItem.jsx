import React from "react";
import { useGlobalState } from "../../context/GlobalState";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 mb-2 w-full rounded-lg flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div>
          <span>${transaction.amount}</span>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            delete
          </button>
      </div>
    </li>
  );
};

export default TransactionItem;
