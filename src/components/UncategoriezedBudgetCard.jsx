/* eslint-disable react/prop-types */
import { UNCATEGORIEZED_BUDGET_ID, useBudget } from "../context/BudgetsContent";
import BudgetCard from "./BudgetCard";

const UncategoriezedBudgetCard = (props) => {
  const { getBudgetExpenses } = useBudget();
  const amount = getBudgetExpenses(UNCATEGORIEZED_BUDGET_ID).reduce(
    (t, ex) => t + +ex.amount,
    0
  );
  if (amount === 0) return null;
  return (
    <BudgetCard
      gray
      amount={amount}
      name={"Uncategoriezed"}
      {...props}
      setViewExpensesModelBudgetId={() =>
        props.setViewExpensesModelBudgetId(UNCATEGORIEZED_BUDGET_ID)
      }
    />
  );
};
export default UncategoriezedBudgetCard;
