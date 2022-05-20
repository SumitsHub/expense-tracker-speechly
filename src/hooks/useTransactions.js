import { useContext } from "react";
import { ExpenseTrackerContext } from "../context/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "../constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const selectedTransactions = transactions.filter((t) => t.type === title);
  const total = selectedTransactions.reduce(
    (acc, currVal) => acc + currVal.amount,
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  selectedTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) category.amount += t.amount;
  });

  const filterdCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [{
      label: 'Transactions',
      data: filterdCategories.map((c) => c.amount),
      backgroundColor: filterdCategories.map((c) => c.color),
    }],
    labels: filterdCategories.map((c) => c.type),
  };

  return { total, chartData };
};

export default useTransactions;
