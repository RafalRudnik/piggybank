import { useState, useEffect } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../services/formatCurrency";
import { deposit, addHistory } from "./accountSlice";

function DepositInput() {
  const [value, setValue] = useState("");
  const [curr, setCurr] = useState("USD");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const account = useSelector((store) => store.account);

  function handleDeposit(e) {
    e.preventDefault();
    if (!value) return;

    const currDate = new Date().toLocaleDateString();

    const depHist = {
      value: output,
      date: currDate,
      type: "deposit",
      balanceAfter: account.balance + output,
    };

    dispatch(deposit(output));
    dispatch(addHistory(depHist));
    setValue("");
    setCurr("USD");
  }

  useEffect(
    function () {
      const controler = new AbortController();

      async function fetchCurrency() {
        try {
          setError("");
          setLoading(true);

          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${value}&from=${curr}&to=USD`,
          );
          if (!res.ok) throw new Error("unable to fetch currency");

          const data = await res.json();
          setOutput(data.rates.USD);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }

      if (!value) return;

      if (curr === "USD") {
        return setOutput(value);
      }

      fetchCurrency();

      return function () {
        controler.abort();
      };
    },
    [curr, value],
  );

  return (
    <form
      className="flex w-full flex-col gap-5 rounded-lg bg-white px-4 py-5"
      onSubmit={handleDeposit}
    >
      <h2 className="py-4 text-center text-3xl font-bold">Place a deposit</h2>
      <div className="flex  items-center justify-between py-10 md:flex-row">
        <p className="text-stone-500">Ammount: </p>
        <input
          className="focus:ring[2px w-2/3 rounded-md border border-indigo-400 p-2 outline-none  focus:ring-indigo-700"
          type="text"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        ></input>
      </div>

      <div className="flex items-center justify-between gap-4">
        <select
          className="rounded-lg border border-indigo-500 p-2 text-sm text-stone-500"
          value={curr}
          onChange={(e) => setCurr(e.target.value)}
        >
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
        </select>
        <p className="text-xs">
          {loading && <Loader />}
          {error && <ErrMsg message={error} />}
          {curr !== "USD" && !loading && !error && (
            <OutputMsg value={value} output={output} />
          )}
        </p>
        <Button type="small">Deposit</Button>
      </div>
    </form>
  );
}

export default DepositInput;

function Loader() {
  return <span>loading...</span>;
}

function ErrMsg({ message }) {
  return (
    <span className="rounded-lg bg-red-200 px-2 py-1 text-center text-xs text-red-700">
      {message}
    </span>
  );
}

function OutputMsg({ value, output }) {
  return <span>{!value ? "" : <OutputValue output={output} />}</span>;
}

function OutputValue({ output }) {
  return (
    <span>
      After currency conversion:
      <span className="ml-3 rounded-lg bg-green-200 px-2 py-1 text-center text-xs text-green-700">
        {formatCurrency(output)}
      </span>
    </span>
  );
}
