import { useRef } from "react";
import { useBudget } from "../context/BudgetsContent";

/* eslint-disable react/prop-types */
const AddBudgetModel = ({ setShowBudget }) => {
  const { addBudget } = useBudget();
  const nameRef = useRef();
  const maxRef = useRef();

  function handleCLick(e) {
    if (nameRef.current.value !== "" && maxRef.current.value !== "") {
      e.preventDefault();
      addBudget({ name: nameRef.current.value, max: maxRef.current.value });
      setShowBudget(false);
    }
  }
  return (
    <div className="p-3 bg-white rounded">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl font-bold">New Budget</h1>
        <span
          onClick={() => setShowBudget(false)}
          className="text-gray-400 text-2xl hover:text-gray-500 transition-colors cursor-pointer"
        >
          &times;
        </span>
      </div>
      <hr />
      <form className="mt-3">
        <label htmlFor="Name" className="block my-2">
          Name
        </label>
        <input
          ref={nameRef}
          required
          type="text"
          id="Name"
          className="border transition-shadow focus:shadow focus:shadow-blue-200 outline-none py-1 px-3 w-full rounded mb-3"
        />
        <label htmlFor="max" className="block my-2">
          Maximum Spending
        </label>
        <input
          ref={maxRef}
          required
          type="number"
          id="max"
          className="border transition-shadow focus:shadow focus:shadow-blue-200 outline-none py-1 px-3 w-full rounded mb-3"
        />
        <button
          type="submit"
          onClick={handleCLick}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded block ml-auto transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default AddBudgetModel;
