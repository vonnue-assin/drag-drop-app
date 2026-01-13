import { useState } from "react";

import ExpenseChart from "../components/ExpenseChart";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { Expense } from "../types/Expense";

import "./styles.css";

const ExpenseShow = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filter, setFilter] = useState("All");

  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const filteredExpenses =
    filter === "All" ? expenses : expenses.filter((e) => e.category === filter);

  return (
    <div className="container">
      <h1 className="expense">💰 Expense Tracker</h1>

      <ExpenseForm onAddExpense={addExpenseHandler} />

      <select onChange={(e) => setFilter(e.target.value)} className="select">
        <option className="option">All</option>
        <option className="option">Food</option>
        <option className="option">Travel</option>
        <option className="option">Shopping</option>
        <option className="option">Bills</option>
      </select>

      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
};

export default ExpenseShow;
