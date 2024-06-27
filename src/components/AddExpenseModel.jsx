/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { UNCATEGORIEZED_BUDGET_ID, useBudget } from "../context/BudgetsContent";

/* eslint-disable react/prop-types */
const AddExpenseModel = ({ setShowExpense, defaultBudget }) => {
  const { addExpense, budgets } = useBudget();
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();

  function handleCLick(e) {
    if (
      descriptionRef.current.value !== "" &&
      amountRef.current.value !== "" &&
      budgetIdRef.current.value !== ""
    ) {
      e.preventDefault();
      addExpense({
        description: descriptionRef.current.value,
        amount: amountRef.current.value,
        budgetId: budgetIdRef.current.value,
      });
      setShowExpense(false);
    }
  }
  return (
    <div className="p-3 bg-white rounded">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl font-bold">New Expense</h1>
        <span
          onClick={() => setShowExpense(false)}
          className="text-gray-400 hover:text-gray-500 transition-colors cursor-pointer text-2xl"
        >
          &times;
        </span>
      </div>
      <hr />
      <form className="mt-3">
        <label htmlFor="Description" className="block my-2">
          Description
        </label>
        <input
          ref={descriptionRef}
          required
          type="text"
          id="Description"
          className="border transition-shadow focus:shadow focus:shadow-blue-200 outline-none py-1 px-3 w-full rounded mb-3"
        />
        <label htmlFor="Amount" className="block my-2">
          Amount
        </label>
        <input
          ref={amountRef}
          required
          type="number"
          id="Amount"
          className="border transition-shadow focus:shadow focus:shadow-blue-200 outline-none py-1 px-3 w-full rounded mb-3"
        />
        <label htmlFor="Budget" className="block my-2">
          Budget
        </label>
        <select
          ref={budgetIdRef}
          defaultValue={defaultBudget}
          className="border transition-shadow focus:shadow focus:shadow-blue-200 outline-none py-2 px-3 w-full rounded mb-3"
        >
          <option value={UNCATEGORIEZED_BUDGET_ID}>Uncategoriezed</option>
          {budgets.map((e) => {
            return (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            );
          })}
        </select>
        <button
          onClick={handleCLick}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded block ml-auto transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default AddExpenseModel;
