import { MouseEvent, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const [trText, setTrText] = useState("");
  const [trAmount, setTrAmount] = useState(0);
  const [trType, setTrType] = useState("credit");

  const { addTransaction } = useContext(GlobalContext);

  const handleButtonClick = (event: MouseEvent) => {
    event.preventDefault(); // Stop reloading the page

    const data = {
      id: crypto.randomUUID(),
      text: trText,
      type: trType,
      amount: trAmount,
    };

    if (data.text !== "" || data.amount !== 0) addTransaction(data);

    // Clear form fields
    setTrText("");
    setTrType("credit");
    setTrAmount(0);
  };

  return (
    <div className="add-transaction">
      <h5>Add Transaction</h5>
      <hr />
      <form>
        <label htmlFor="txtText">Transaction</label>
        <input
          type="text"
          id="txtText"
          value={trText}
          onChange={(event) => setTrText(event.target.value)}
          className="form-control"
        />
        <label htmlFor="cbType">Transaction Type</label>
        <select
          id="cbType"
          value={trType}
          onChange={(event) => setTrType(event.target.value)}
          className="form-control"
        >
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <ul>
          <li>Credit - Used for what comes to us. (Receiving)</li>
          <li>Debit - Used for what going away from us. (Giving)</li>
        </ul>
        <label htmlFor="txtAmount">Amount</label>
        <input
          type="number"
          id="txtAmount"
          value={trAmount}
          onChange={(event) => {
            if (event.target.value !== "")
              return setTrAmount(parseInt(event.target.value));
          }}
          className="form-control"
        />
        <button
          onClick={handleButtonClick}
          className="btn btn-primary form-control"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
