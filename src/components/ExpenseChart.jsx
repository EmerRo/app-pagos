import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";
const ExpenseChart = () => {
  const { transactions } = useGlobalState();
  const totalIcome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

      const totalExpensePercentage = Math.round((totalExpense / totalIcome)*100)

      const totalIncomePorcentage = 100 - totalExpensePercentage
  return (
    <VictoryPie
      colorScale={["#c026d3", "#06b6d4"]}
      data={[
        { x: "Expenses", y: totalExpensePercentage },
        { x: "Incomes", y: totalIncomePorcentage },
      ]}
      animate={{
        duration: 2000,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
};

export default ExpenseChart;
