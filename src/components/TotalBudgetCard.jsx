import { useBudget } from "../context/BudgetsContent";
import BudgetCard from "./BudgetCard";

const TotalBudgetCard = () => {
  const { expenses, budgets } = useBudget();
  const amount = expenses.reduce((t, ex) => t + +ex.amount, 0);
  const max = budgets.reduce((t, bu) => t + +bu.max, 0);
  if (max === 0) return null;
  return <BudgetCard gray amount={amount} name={"Total"} max={max} />;
};
export default TotalBudgetCard;
