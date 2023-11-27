import Form from "./Form";
import TaskList from "./TaskList";

function Taask() {
  return (
    <div>
      <h3 className="mt-8 py-2 text-sm text-stone-500 font-bold">Add important tasks</h3>
      <Form />
      <TaskList />
    </div>
  );
}

export default Taask;
