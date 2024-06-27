/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";

const BudgetsContext = createContext();

export const UNCATEGORIEZED_BUDGET_ID = "Uncategoriezed";

export function useBudget() {
  return useContext(BudgetsContext);
}

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  function getBudgetExpenses(budgetId) {
    return expenses.filter((e) => e.budgetId === budgetId);
  }
  function addExpense({ description, amount, budgetId }) {
    setExpenses((prev) => [
      ...prev,
      { id: uuidV4(), description, amount, budgetId },
    ]);
  }
  function addBudget({ name, max }) {
    if (budgets.find((e) => e.name === name)) return;
    setBudgets((prev) => [...prev, { id: uuidV4(), name, max }]);
  }
  function deleteBudget(id) {
    setExpenses((prev) => {
      return prev.map((e) => {
        if (e.budgetId !== id) return e;
        return { ...e, budgetId: UNCATEGORIEZED_BUDGET_ID };
      });
    });
    setBudgets((prev) => prev.filter((e) => e.id !== id));
  }
  function deleteExpense(id) {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }
  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
