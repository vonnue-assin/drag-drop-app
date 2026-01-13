import { useState } from "react";
import { Expense } from "../../types/Expense";

type Props = {
  onAddExpense: (expense: Expense) => void;
};

const ExpenseForm = ({ onAddExpense }: Props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      title,
      amount: Number(amount),
      category: "Food",
      date: new Date().toISOString(),
    };

    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
