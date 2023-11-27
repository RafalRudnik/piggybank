import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../services/formatCurrency";
import { sortHistory } from "./accountSlice";

function AccountHistory() {
  const account = useSelector((store) => store.account);
  const dispatch = useDispatch();
  let sortedArray;

  if (account.sortBy === "input") {
    sortedArray = account.accountHistory;
  } else if (account.sortBy === "type") {
    sortedArray = account.accountHistory
      .slice()
      .sort((a, b) => a.type.localeCompare(b.type));
  }

  if (!account.accountHistory.length) {
    return (
      <div className="flex w-full flex-col gap-5 rounded-lg bg-white px-4 py-5">
        <h2 className="py-4 text-center text-3xl font-bold">
          Your Piggy account history:
        </h2>
        <p className="text-center text-sm text-stone-500">
          There are no deposit / withdraw history on your account yet.
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-5 rounded-lg bg-white px-4 py-5">
      <h2 className="py-4 text-center text-3xl font-bold">
        Your Piggy account history:
      </h2>
      <ul className="mt-8 max-h-[800px] w-full overflow-y-auto">
        {/* {account.accountHistory.map((item, index) => (
          <HistoryItem item={item} key={index} />
        ))} */}
        {sortedArray.map((item, index) => (
          <HistoryItem item={item} key={index} />
        ))}
      </ul>
      <select
        className="rounded-lg border border-indigo-500 p-2 text-sm text-stone-500"
        value={account.sortBy}
        onChange={(e) => dispatch(sortHistory(e.target.value))}
      >
        <option value="input">Sort by date input</option>
        <option value="type">Sort by type</option>
      </select>
    </div>
  );
}

export default AccountHistory;

function HistoryItem({ item }) {
  return (
    <li className="flex w-full items-center justify-between border-b-[1px] border-stone-300 py-2 text-xs md:py-4">
      <p>{item.date}</p>
      <p
        className={`${
          item.type === "deposit" || item.type === "loan"
            ? "w-1/5 rounded-lg bg-green-300 px-2 py-1 text-center  text-green-800"
            : "w-1/5 rounded-lg bg-red-300 px-2 py-1 text-center  text-red-800"
        }`}
      >
        {item.type}
      </p>
      <p
        className={`${
          item.type === "deposit" || item.type === "loan"
            ? "text-green-500 w-1/6"
            : "text-red-500 w-1/6"
        }`}
      >
        {formatCurrency(item.value)}
      </p>
      <p>{formatCurrency(item.balanceAfter)}</p>
    </li>
  );
}
