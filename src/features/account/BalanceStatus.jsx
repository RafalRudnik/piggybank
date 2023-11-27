import { useSelector } from "react-redux";
import { formatCurrency } from "../../services/formatCurrency";

function BalanceStatus() {
  const balance = useSelector((store) => store.account.balance);
  const deposits = useSelector((store) => store.account.depositHistory);

  const allDeposits = !deposits.length
    ? 0
    : deposits.reduce(function (prev, curr) {
        return prev + curr;
      });

  return (
    <div className="flex h-[140px] flex-col justify-center gap-3">
      <p className="text-sm text-stone-400">Total balance:</p>
      <h3 className="font-bold">{formatCurrency(balance)}</h3>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-xs text-stone-400">Total deposits</p>
        <p className="rounded-2xl bg-green-200 px-2 py-1 text-center text-xs text-green-800 ">
          {formatCurrency(allDeposits)}
        </p>
      </div>
    </div>
  );
}

export default BalanceStatus;
