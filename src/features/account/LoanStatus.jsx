import { useSelector } from "react-redux";
import { formatCurrency } from "../../services/formatCurrency";

function LoanStatus() {
  const loan = useSelector((store) => store.account.loan);
  const maxLoan = useSelector((store) => store.account.maxLoan);

  return (
    <div className="flex h-[140px] flex-col justify-center gap-3">
      <p className="text-sm text-stone-400">Loans:</p>
      <h3 className="font-bold">{formatCurrency(loan)}</h3>
      <div className="flex items-center justify-between">
        <p className="text-xs text-stone-400">0</p>
        <progress max={maxLoan} value={loan}></progress>
        <p className="text-xs text-stone-400">{maxLoan}</p>
      </div>
    </div>
  );
}

export default LoanStatus;
