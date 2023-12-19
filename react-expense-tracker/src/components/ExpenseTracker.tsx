import { GlobalProvider } from "../context/GlobalState";
import "../styles/expense-tracker.css";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import DrCrCard from "./DrCrCard";
import Header from "./Header";
import History from "./History";

function ExpeseTracker() {
  return (
    <div className="d-flex flex-column et-root">
      <GlobalProvider>
        <Header />
        <Balance />
        <DrCrCard />
        <History />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default ExpeseTracker;
