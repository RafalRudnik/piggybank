import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Task from "../features/tasklist/Task";
import { useSelector } from "react-redux";
import { formatCurrency } from "../services/formatCurrency";

function Sidebar() {
  return (
    <motion.div
      className="w-full flex-col rounded-lg bg-white px-4 py-5 md:w-[500px]"
      initial={{ x: "80%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <p className="text-stone-600">Your card</p>
      <Card />
      <Balance />
      <Task />
    </motion.div>
  );
}

export default Sidebar;

function Card() {
  return (
    <div className="w-full overflow-hidden py-2">
      <img src="./img/card.png"></img>
    </div>
  );
}

function Balance() {
  const balance = useSelector((store) => store.account.balance);

  return (
    <div className="flex items-center justify-between gap-2 py-7">
      <div>
        <p className="text-sm text-stone-600">Total Balance</p>
        <p className="font-bold">{formatCurrency(balance)}</p>
      </div>
      <div className="transition:duration-300 w-20 rounded-md bg-stone-200 py-2 text-center text-stone-500 transition-colors hover:text-indigo-600">
        <Link to="/deposit">
          <i className="ti ti-download"></i>
          <p className="text-xs">Deposit</p>
        </Link>
      </div>
      <div className="transition:duration-300 w-20 rounded-md bg-stone-200 py-2 text-center text-stone-500 transition-colors hover:text-indigo-600">
        <Link to="/withdraw">
          <i className="ti ti-upload"></i>
          <p className="text-xs">Withdraw</p>
        </Link>
      </div>
    </div>
  );
}
