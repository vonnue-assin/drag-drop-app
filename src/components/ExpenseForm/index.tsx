import { useState } from "react";
import { Expense } from "../../types/Expense";

import "./styles.css";

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
    <form onSubmit={submitHandler} className="submit-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="form"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="form"
      />
      <button type="submit" className="add-expense">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
