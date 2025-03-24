import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TaskInput = () => {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      dispatch(
        addTask({ id: Date.now(), text: taskText, priority })
      );
      setTaskText("");
      setPriority("Medium");
    }
  };

  return (
    <div className="flex flex-col p-4 gap-2">
      <input
        type="text"
        className="border p-2 w-full rounded"
        placeholder="Enter task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
      />
      <select
        className="border p-2 w-full rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;