import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function DrCrCard() {
  const { transactions } = useContext(GlobalContext);

  const debitAmount: number[] = transactions
    .filter((transaction) => {
      if (transaction.type === "debit") return transaction;
      return 0;
    })
    .map((transaction) => transaction.amount);

  const creditAmount: number[] = transactions
    .filter((transaction) => {
      if (transaction.type === "credit") return transaction;
      return 0;
    })
    .map((transaction) => transaction.amount);

  const debitTotal = debitAmount
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const creditTotal = creditAmount
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="et-card">
      <div className="et-card-item plus">
        <label>Credit</label>
        <span>Rs.{creditTotal}</span>
      </div>
      <div className="et-card-item minus">
        <label>Debit</label>
        <span>Rs.{debitTotal}</span>
      </div>
    </div>
  );
}

export default DrCrCard;
