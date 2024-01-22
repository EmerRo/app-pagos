import Balance from "./components/Balance";
import ExpenseChart from "./components/ExpenseChart";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-[#0f172a] h-screen text-white flex justify-center items-center">
       <div className="container mx-auto w-3/6">
       <div className="bg-gray-800 p-10 rounded-lg flex gap-x-4">
          <div>
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <div className="flex flex-col flex-1">
            <ExpenseChart/>
            <TransactionList />
          </div>
        </div>
       </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
