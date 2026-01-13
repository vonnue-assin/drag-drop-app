import { Expense } from "../../types/Expense";

type Props = {
  expenses: Expense[];
};

const ExpenseChart = ({ expenses }: Props) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  return (
    <div>
      <h3>Total Spent: {total}</h3>
      <div className="chart-bar">
        <div
          className="chart-fill"
          style={{ width: `${Math.min(total / 100, 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ExpenseChart;
