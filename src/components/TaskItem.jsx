import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../redux/taskSlice";
import { fetchWeather } from "../services/api";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  // For editing
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [editPriority, setEditPriority] = useState(task.priority);

  useEffect(() => {
    if (task.priority === "High") {
      fetchWeather("New York")
        .then((data) => data && setWeather(data))
        .catch(() => setError("Failed to load weather"));
    }
  }, [task.priority]);

  const handleSave = () => {
    if (editText.trim() !== "") {
      dispatch(updateTask({ id: task.id, text: editText, priority: editPriority }));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded mb-2 transition-all hover:shadow-lg">
      <div className="flex-1">
        {isEditing ? (
          <div className="flex flex-col gap-2">
            <input
              type="text"
              className="border p-2 w-full rounded dark:bg-gray-700 dark:text-white"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <select
              className="border p-2 w-full rounded dark:bg-gray-700 dark:text-white"
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        ) : (
          <div>
            <span className="text-lg font-medium dark:text-gray-200">
              {task.text}{" "}
              <span className="text-sm font-normal dark:text-gray-300">({task.priority})</span>
            </span>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {weather && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {weather.main.temp}°C, {weather.weather[0].description}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex gap-2 mt-2 md:mt-0">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-2 py-1 rounded transition-colors"
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditText(task.text);
                setEditPriority(task.priority);
              }}
              className="bg-gray-500 text-white px-2 py-1 rounded transition-colors"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-2 py-1 rounded transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeTask(task.id))}
              className="bg-red-500 text-white px-2 py-1 rounded transition-colors"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;