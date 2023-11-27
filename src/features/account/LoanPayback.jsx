import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../services/formatCurrency";
import { useState } from "react";
import Button from "../../ui/Button";
import { addHistory, payLoan } from "./accountSlice";

function LoanPayback() {
  const [paybackValue, setPaybackValue] = useState();
  const account = useSelector((store) => store.account);
  const dispatch = useDispatch();

  function handlePayLoan() {
    const currDate = new Date().toLocaleDateString();

    if (
      !paybackValue ||
      account.balance < paybackValue ||
      paybackValue > account.loan
    )
      return;

    const depHist = {
      value: paybackValue,
      date: currDate,
      type: "loan payback",
      balanceAfter: account.balance - paybackValue,
    };

    dispatch(addHistory(depHist));
    dispatch(payLoan(paybackValue));
    setPaybackValue("");
  }

  return (
    <div className="flex w-full flex-col gap-5 rounded-lg bg-white px-4 py-5">
      <h2 className="py-4 text-center text-3xl font-bold">Payback loan: </h2>
      <div className="flex  items-center justify-between gap-1 py-10 md:flex-row">
        <p className="text-stone-500">
          Ammount:{" "}
          <span className="block text-xs text-stone-500">
            {account.loan === 0
              ? `(You don't have any loan)`
              : `(you can payback up to: ${formatCurrency(account.loan)})`}
          </span>{" "}
        </p>
        <input
          className="focus:ring[2px w-2/3 rounded-md border border-indigo-400 p-2 outline-none  focus:ring-indigo-700"
          type="text"
          value={paybackValue}
          onChange={(e) => setPaybackValue(Number(e.target.value))}
        ></input>
      </div>
      <div className="flex items-center justify-end">
        {account.loan < paybackValue && (
          <span className="mr-4 block rounded-lg bg-red-200 px-2 py-1 text-center text-xs text-red-700">
            {`We're sorry you can payback up to - ${formatCurrency(
              account.loan,
            )}`}
          </span>
        )}
        {account.balance < paybackValue && (
          <span className="mr-4 block rounded-lg bg-red-200 px-2 py-1 text-center text-xs text-red-700">
            {`We're sorry but you'r account balance is less than - ${formatCurrency(
              paybackValue,
            )}`}
          </span>
        )}

        <Button type="small" onClick={handlePayLoan}>
          {account.loan === 0 ||
          account.loan < paybackValue ||
          account.balance < paybackValue ? (
            <i className="ti ti-ban"></i>
          ) : (
            "Payback loan"
          )}
        </Button>
      </div>
    </div>
  );
}

export default LoanPayback;
