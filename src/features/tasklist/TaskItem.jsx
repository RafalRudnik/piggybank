import { useDispatch } from "react-redux";
import { checkItem, deleteItem } from "./tasksSlice";
import { motion } from "framer-motion";

function TaskItem({ item }) {
  const dispatch = useDispatch();

  return (
    <motion.li
      className="relative flex w-full items-center gap-3 border-b py-2 text-sm text-stone-600"
      initial={{ y: "10%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <input
        className="accent-indigo-200"
        type="checkbox"
        value={item.checked}
        onChange={() => dispatch(checkItem(item.id))}
      ></input>
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.desc}{" "}
      </span>
      <button
        className="absolute right-0 h-[25px] w-[25px] rounded-full bg-indigo-500 text-stone-100 transition-colors duration-300 hover:bg-indigo-400"
        onClick={() => dispatch(deleteItem(item.id))}
      >
        &times;
      </button>
    </motion.li>
  );
}

export default TaskItem;
