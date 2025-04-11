import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [newExpense, setNewExpense] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(newExpense);
    setNewExpense({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={newExpense.name} onChange={handleChange} placeholder="Expense name" required />
        <input name="description" value={newExpense.description} onChange={handleChange} placeholder="Description" required />
        <input name="category" value={newExpense.category} onChange={handleChange} placeholder="Category" required />
        <input name="amount" value={newExpense.amount} onChange={handleChange} placeholder="Amount" type="number" required />
        <input name="date" value={newExpense.date} onChange={handleChange} placeholder="Date" type="date" required />
        <button type="submit">Submit</button>
        {/* DELETE */}
      </form>
      <form action="Delete">
      <button type="Delete">Delete</button>
      
      </form>
    </div>
  );
}

export default ExpenseForm;
