import { Expense } from "../../types/Expense";
import ExpenseItem from "../ExpenseItem";

type Props = {
  expenses: Expense[];
};

const ExpenseList = ({ expenses }: Props) => {
  if (expenses.length === 0) {
    return <p>No Expenses Found</p>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
