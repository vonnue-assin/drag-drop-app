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
      <h1>💰 Expense Tracker</h1>

      <ExpenseForm onAddExpense={addExpenseHandler} />

      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
      </select>

      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
};

export default ExpenseShow;
