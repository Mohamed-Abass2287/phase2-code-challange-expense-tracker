import React, { useState } from "react";

function ExpenseList({ expenses }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm) ||
    expense.description.toLowerCase().includes(searchTerm) ||
    expense.category.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h2>Expense List</h2>
      <p>Track your financial expenses.Record,categorize and analyze your spending </p>
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />

      <table border="1">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;

