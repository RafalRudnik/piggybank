import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { formatCurrency } from "../../services/formatCurrency";
import Button from "../../ui/Button";
import { addHistory, addLoan } from "./accountSlice";

function LoanInput() {
  const account = useSelector((store) => store.account);
  const [loanValue, setLoanValue] = useState("");
  const maxPossibleLoan = account.maxLoan - account.loan;
  const dispatch = useDispatch();

  function handleAddLoan() {
    if (!loanValue || loanValue > maxPossibleLoan) return;

    const currDate = new Date().toLocaleDateString();

    const depHist = {
      value: loanValue,
      date: currDate,
      type: "loan",
      balanceAfter: account.balance + loanValue,
    };

    dispatch(addLoan(loanValue));
    dispatch(addHistory(depHist));
    setLoanValue("");
  }

  return (
    <div className="flex w-full flex-col gap-5 rounded-lg bg-white px-4 py-5">
      <h2 className="py-4 text-center text-3xl font-bold">
        Current loan:{" "}
        {account.loan === 0 ? (
          <span className="text-green-400">{formatCurrency(account.loan)}</span>
        ) : (
          <span className="text-red-400">{formatCurrency(account.loan)}</span>
        )}
      </h2>
      <div className="flex  items-center justify-between gap-1 py-10 md:flex-row">
        <p className="text-stone-500">
          Ammount:{" "}
          <span className="block text-xs text-stone-500">
            (your credit line is up to {formatCurrency(account.maxLoan)})
          </span>{" "}
        </p>
        <input
          className="focus:ring[2px w-2/3 rounded-md border border-indigo-400 p-2 outline-none  focus:ring-indigo-700"
          type="text"
          value={loanValue}
          onChange={(e) => setLoanValue(Number(e.target.value))}
        ></input>
      </div>
      <div className="text-right">
        {account.loan === account.maxLoan && (
          <span className="mr-4 rounded-lg bg-red-200 px-2 py-1 text-center text-xs text-red-700">
            {`We're sorry you've reached your loan limit - ${formatCurrency(
              account.maxLoan,
            )}`}
          </span>
        )}
        {maxPossibleLoan < loanValue && (
          <span className="mr-4 rounded-lg bg-red-200 px-2 py-1 text-center text-xs text-red-700">
            {`Sorry your credit limit is set to ${formatCurrency(
              account.maxLoan,
            )} you can't loan more than ${formatCurrency(maxPossibleLoan)}`}
          </span>
        )}
        <Button
          type="small"
          disabled={
            account.loan === account.maxLoan || loanValue > maxPossibleLoan
          }
          onClick={handleAddLoan}
        >
          {account.loan === account.maxLoan || loanValue > maxPossibleLoan ? (
            <i className="ti ti-ban"></i>
          ) : (
            "Take loan"
          )}
        </Button>
      </div>
    </div>
  );
}

export default LoanInput;
