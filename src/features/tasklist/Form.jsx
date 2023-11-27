import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { addItem } from "./tasksSlice";

function Form() {
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;

    const newItem = {
      desc,
      checked: false,
      id: Date.now(),
    };
    dispatch(addItem(newItem));
    setDesc("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between">
      <input
        className="focus:ring[2px w-2/3 rounded-md border border-indigo-400 p-2 outline-none  focus:ring-indigo-700"
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></input>
      <Button type="small">Add</Button>
    </form>
  );
}

export default Form;
