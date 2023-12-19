import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
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

  const debitTotal: number = debitAmount.reduce(
    (acc, item) => (acc += item),
    0
  );
  const creditTotal: number = creditAmount.reduce(
    (acc, item) => (acc += item),
    0
  );

  const total = (creditTotal - debitTotal).toFixed(2);

  return (
    <div className="et-balance">
      <span>YOUR BALANCE</span>
      <h1>Rs.{total}</h1>
    </div>
  );
}

export default Balance;
