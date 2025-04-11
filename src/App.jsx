import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      name: "Ugali Matumbo",
      description: "Wednesday's Lunch",
      category: "Food",
      amount: 100,
      date: "2025-04-08",
    },
    {
      name: "NYC Buses",
      description: "Power failure",
      category: "Utilities",
      amount: 2000,
      date: "2025-04-05",
    },
    {
      name: "Buy shoes",
      description: "Add to my shoe collection",
      category: "Personal",
      amount: 5000,
      date: "2025-04-06",
    },
    {
      name: "Buy book",
      description: "Add to my book collection",
      category: "Growth",
      amount: 10000,
      date: "2025-04-07",
    },
    {
      name: "Buy a car",
      description: "Add to my car collection",
      category: "Personal",
      amount: 100000,
      date: "2025-04-08",
    },
    {
      name: "Buy a house",
      description: "Add to my house collection",
      category: "Personal",
      amount: 1000000,
      date: "2025-04-09",
    },
    {
      name: "Buy a yacht",
      description: "Add to my yacht collection",
      category: "Personal",
      amount: 10000000,
      date: "2025-04-10",
    },
   
  ]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "20px" }}>
        <ExpenseForm addExpense={addExpense} />
      </div>
      <div>
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App

