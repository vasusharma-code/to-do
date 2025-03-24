import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!user) navigate("/");
  }, [user, navigate]);

  // Apply dark mode on the document root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-700 p-4 transition-colors">
      <div className="w-full max-w-lg bg-white dark:bg-zinc-700 shadow-lg rounded-lg p-6 transition-colors">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold dark:text-gray-200">Hello, {user.name}!</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-indigo-500 text-white px-3 py-1 rounded transition-colors"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default Home;