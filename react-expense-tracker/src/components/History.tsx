import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { HistoryItem } from "./HistoryItem";

export default function History() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="history">
      <h5>Transaction History</h5>
      <hr />
      <ul className="tr-list">
        {transactions.map((transaction) => (
          <HistoryItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
