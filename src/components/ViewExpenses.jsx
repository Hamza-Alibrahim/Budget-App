import { UNCATEGORIEZED_BUDGET_ID, useBudget } from "../context/BudgetsContent";

/* eslint-disable react/prop-types */
const ViewExpenses = ({ budgetId, close }) => {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudget();
  const budget =
    UNCATEGORIEZED_BUDGET_ID === budgetId
      ? { name: "Uncategoriezed", id: UNCATEGORIEZED_BUDGET_ID }
      : budgets.find((e) => e.id === budgetId);
  return (
    <div className="p-3 bg-white rounded">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl font-bold">
          Expenses - {budget?.name}
          {budgetId !== UNCATEGORIEZED_BUDGET_ID && (
            <button
              onClick={() => {
                deleteBudget(budgetId);
                close();
              }}
              className="text-lg p-1 ml-2 rounded transition-colors border border-pink-400 hover:bg-pink-400 text-pink-400 hover:text-white"
            >
              Delete
            </button>
          )}
        </h1>
        <span
          onClick={close}
          className="text-gray-400 hover:text-gray-500 transition-colors cursor-pointer text-2xl"
        >
          &times;
        </span>
      </div>
      <hr />
      <div className="my-4">
        {getBudgetExpenses(budget.id).map((e) => {
          return (
            <div className="flex justify-between my-3" key={e.id}>
              <span>{e.description}</span>
              <span>
                ${e.amount}{" "}
                <button
                  onClick={() => deleteExpense(e.id)}
                  className="border rounded border-pink-400 hover:bg-pink-400 text-pink-400 hover:text-white py-[.25rem] px-1 transition-colors text-[10px]"
                >
                  &times;
                </button>{" "}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ViewExpenses;
