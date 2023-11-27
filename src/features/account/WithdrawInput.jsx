import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addHistory, withdraw } from "./accountSlice";

function WithdrawInput() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const accBalance = useSelector((store) => store.account.balance);

  function handleWithdraw(e) {
    e.preventDefault();
    if (!value || value > accBalance) return;

    const currDate = new Date().toLocaleDateString();
    const depHist = {
      value: value,
      date: currDate,
      type: "withdraw",
      balanceAfter: accBalance - value,
    };

    dispatch(addHistory(depHist));
    dispatch(withdraw(value));
    setValue("");
  }

  return (
    <form
      className="flex w-full flex-col gap-5 rounded-lg bg-white px-4 py-5"
      onSubmit={handleWithdraw}
    >
      <h2 className="py-4 text-center text-3xl font-bold">Withdrawal</h2>
      <div className="flex  items-center justify-between py-10 md:flex-row">
        <p className="text-stone-500">Ammount: </p>
        <input
          className="focus:ring[2px w-2/3 rounded-md border border-indigo-400 p-2 outline-none  focus:ring-indigo-700"
          type="text"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        ></input>
      </div>
      <div className="text-right">
        {value > accBalance && (
          <span className="mr-4 rounded-lg bg-red-200 px-2 py-1 text-center text-xs text-red-700">
            {`You don't have enough money, maybe you need a loan?`}
          </span>
        )}
        <Button type="small">Withdraw</Button>
      </div>
    </form>
  );
}

export default WithdrawInput;
