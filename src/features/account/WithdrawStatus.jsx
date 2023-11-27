import { useSelector } from "react-redux";
import { formatCurrency } from "../../services/formatCurrency";

function WithdrawStatus() {
  const withdraws = useSelector((store) => store.account.withdrawHistory);

  const totalWithdraws = withdraws.reduce(function (prev, curr) {
    return prev + curr;
  });

  return (
    <div className="flex h-[140px] flex-col justify-center gap-3">
      <p className="text-sm text-stone-400">Last withdraw:</p>
      <h3 className="font-bold">
        {formatCurrency(
          withdraws.length === 0 ? 0 : withdraws[withdraws.length - 1],
        )}
      </h3>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-xs text-stone-400">Total withdraws</p>
        <p className="rounded-2xl bg-red-200 px-2 py-1 text-center text-xs text-red-800">
          {formatCurrency(totalWithdraws)}
        </p>
      </div>
    </div>
  );
}

export default WithdrawStatus;
