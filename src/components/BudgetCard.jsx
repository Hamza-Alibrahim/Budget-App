/* eslint-disable react/prop-types */
import { currencyFormatter } from "../utils/Formatter";
const BudgetCard = ({
  name,
  amount,
  max,
  gray,
  onAddExpenseClick,
  setViewExpensesModelBudgetId,
}) => {
  const parsent = (amount / max) * 100;
  return (
    <div
      className={`p-4 border rounded ${gray && "bg-gray-200"} ${
        amount > max && "!bg-red-200"
      }`}
    >
      <div
        className={`flex justify-between items-center px-2 ${
          max ? "" : "mb-4"
        }`}
      >
        <h2 className="text-lg ">{name}</h2>
        <h2 className="flex items-center">
          <span className="text-lg">{currencyFormatter.format(amount)}</span>
          {max && (
            <>
              <span className="mx-1">\</span>
              <span className="text-gray-500">
                {currencyFormatter.format(max)}
              </span>
            </>
          )}
        </h2>
      </div>
      {max && (
        <div
          className="rounded-full mt-6 mb-5 
      overflow-hidden bg-gray-100 h-5"
        >
          <span
            className={`${
              parsent < 50
                ? "bg-blue-500"
                : parsent > 75
                ? "bg-red-500"
                : "bg-yellow-500"
            } h-full block transition-[width] duration-500`}
            style={{
              width: `${parsent}%`,
            }}
          ></span>
        </div>
      )}
      {name !== "Total" && (
        <div className="flex justify-end gap-1">
          <button
            onClick={onAddExpenseClick}
            className="text-blue-500 hover:bg-blue-500 hover:text-white transition-colors px-3 py-1 border border-blue-500 rounded"
          >
            Add Expense
          </button>
          <button
            onClick={setViewExpensesModelBudgetId}
            className="text-gray-500 hover:bg-gray-500 hover:text-white transition-colors px-3 py-1 border border-gray-500 rounded"
          >
            Veiw Expenses
          </button>
        </div>
      )}
    </div>
  );
};
export default BudgetCard;
