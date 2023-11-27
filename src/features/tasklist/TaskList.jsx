import { useDispatch, useSelector } from "react-redux";
import { clearList, sortItems } from "./tasksSlice";
import TaskItem from "./TaskItem";
import Button from "../../ui/Button";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  let sortedArray;

  if (tasks.sortBy === "input") {
    sortedArray = tasks.items;
  } else if (tasks.sortBy === "description") {
    sortedArray = tasks.items
      .slice()
      .sort((a, b) => a.desc.localeCompare(b.desc));
  } else if (tasks.sortBy === "checked") {
    sortedArray = tasks.items
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));
  }

  function handleClearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete all tasks?",
    );
    if (confirm) {
      dispatch(clearList());
    }
  }

  return (
    <div>
      <ul className="mb-5 mt-5 flex max-h-96 flex-col gap-2 overflow-y-auto py-4 md:py-8">
        {sortedArray.map((item) => (
          <TaskItem item={item} key={item.id} />
        ))}
      </ul>
      {tasks.items.length > 0 && (
        <div className="mt-6 flex items-center justify-between">
          <select
            className="rounded-lg border border-indigo-500 p-2 text-sm text-stone-500"
            value={tasks.sortBy}
            onChange={(e) => dispatch(sortItems(e.target.value))}
          >
            <option value="input">Sort by input</option>
            <option value="description">Sort by description</option>
            <option value="checked">Sort by checked status</option>
          </select>
          <Button type="small" onClick={handleClearList}>
            Clear list
          </Button>
        </div>
      )}
    </div>
  );
}

export default TaskList;
