import { UNCATEGORIEZED_BUDGET_ID } from "../context/BudgetsContent";

/* eslint-disable react/prop-types */
const Header = ({ setShowBudget, setOpen }) => {
  return (
    <div className="flex justify-between items-center gap-4 mt-2 mb-8">
      <h1 className="text-2xl font-bold">Budgets</h1>
      <div className="flex gap-2">
        <button
          onClick={() => setShowBudget(true)}
          className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Budget
        </button>
        <button
          onClick={() => setOpen(UNCATEGORIEZED_BUDGET_ID)}
          className="py-1 px-3 rounded border text-blue-500 hover:text-white hover:bg-blue-500 transition-colors"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};
export default Header;
