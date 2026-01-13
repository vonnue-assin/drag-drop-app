import { Expense } from "../../types/Expense";

type Props = {
  expense: Expense;
};

const ExpenseItem = ({ expense }: Props) => {
  return (
    <li className="expense-item">
      <span>{expense.title}</span>
      <span>{expense.category}</span>
      <span>{expense.amount}</span>
      <span>{expense.date}</span>
    </li>
  );
};

export default ExpenseItem;
