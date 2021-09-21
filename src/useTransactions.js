/** @format */

import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

import expenseCategories from "./constants/expenseCategories";
import incomeCategories from "./constants/incomeCategories";

const useTransactions = (category) => {
  const { transactions } = useContext(GlobalContext);
  const rightTransactions = transactions.filter((t) => t.type === category);
  const total = rightTransactions.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  //   const transactionsPerCategory = transactions.filter(
  //     (t) => t.cateogry === title
  //   );
  //   const total = transactionsPerCategory.reduce(
  //     (acc, currVal) => ((acc += currVal.amount), 0)
  //   );
  const categories = (category = "income"
    ? incomeCategories
    : expenseCategories);
  //   console.log({ transactionsPerCategory, total, categories });

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.category === t.type);

    if (category) category.amount += t.amount;
  });

  //   const filteredCategories = categories.filter((sc) => sc.amount > 0);
  //   transactionsPerCategory.forEach((t) => {
  //     const category = categories.find((c) => c.category === t.type);
  //     if (type) type.amount += t.amount;
  //   });

  const filteredCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.category),
  };
  return { chartData, total };
};

export default useTransactions;
