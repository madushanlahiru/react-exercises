import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const HistoryItem = ({ transaction }: any) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={transaction.type === "credit" ? "plus" : "minus"}>
      <span>{transaction.text}</span> <span>Rs.{transaction.amount}</span>
      <button
        onClick={(event) => {
          event.preventDefault();
          deleteTransaction(transaction);
        }}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
};
