import { Expense } from "../../types/Expense";

import "./styles.css";

type Props = {
  expenses: Expense[];
};

const ExpenseChart = ({ expenses }: Props) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  return (
    <div className="total">
      <h3 className="spent">Total Spent: {total}</h3>
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
