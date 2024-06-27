import { useState } from "react";
import BudgetCard from "./components/BudgetCard";
import Header from "./components/Header";
import AddBudgetModel from "./components/AddBudgetModel";
import AddExpenseModel from "./components/AddExpenseModel";
import { UNCATEGORIEZED_BUDGET_ID, useBudget } from "./context/BudgetsContent";
import UncategoriezedBudgetCard from "./components/UncategoriezedBudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";
import ViewExpenses from "./components/ViewExpenses";

const App = () => {
  const [showBudget, setShowBudget] = useState(false);
  const [showExpense, setShowExpense] = useState(false);
  const [addExpenseModelBudgetId, setAddExpenseModelBudgetId] = useState();
  const [viewExpensesModelBudgetId, setViewExpensesModelBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudget();
  function openAddExpense(budgetId) {
    setShowExpense(true);
    setAddExpenseModelBudgetId(budgetId);
  }
  return (
    <div className="p-4 max-w-[1200px] m-auto">
      {showBudget && (
        <>
          <div className="show max-w-[600px]">
            <AddBudgetModel setShowBudget={setShowBudget} />
          </div>
          <div className="absolute left-0 top-0 w-screen h-screen bg-[rgb(0,0,0,.7)] z-50"></div>
        </>
      )}
      {showExpense && (
        <>
          <div className="show max-w-[600px]">
            <AddExpenseModel
              setShowExpense={setShowExpense}
              defaultBudget={addExpenseModelBudgetId}
            />
          </div>
          <div className="absolute left-0 top-0 w-screen h-screen bg-[rgb(0,0,0,.7)] z-50"></div>
        </>
      )}
      {viewExpensesModelBudgetId && (
        <>
          <div className="show max-w-[600px]">
            <ViewExpenses
              budgetId={viewExpensesModelBudgetId}
              close={() => setViewExpensesModelBudgetId()}
            />
          </div>
          <div className="absolute left-0 top-0 w-screen h-screen bg-[rgb(0,0,0,.7)] z-50"></div>
        </>
      )}
      <Header setShowBudget={setShowBudget} setOpen={openAddExpense} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
        {budgets.map((budget) => {
          const amount = getBudgetExpenses(budget.id).reduce(
            (t, ex) => t + +ex.amount,
            0
          );
          return (
            <BudgetCard
              key={budget.id}
              name={budget.name}
              amount={amount}
              max={budget.max}
              onAddExpenseClick={() => openAddExpense(budget.id)}
              setViewExpensesModelBudgetId={() =>
                setViewExpensesModelBudgetId(budget.id)
              }
            />
          );
        })}
        <UncategoriezedBudgetCard
          onAddExpenseClick={() => openAddExpense(UNCATEGORIEZED_BUDGET_ID)}
          setViewExpensesModelBudgetId={() =>
            setViewExpensesModelBudgetId(UNCATEGORIEZED_BUDGET_ID)
          }
        />
        <TotalBudgetCard />
      </div>
    </div>
  );
};
export default App;
