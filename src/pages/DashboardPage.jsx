import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const [userName, setUserName] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [deadlines, setDeadlines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingTodos, setLoadingTodos] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      setUserName(userData.name || userData.fullName || userData.email || "User");
    }
  }, []);

  // Fetch Enrolled Courses from Fake Store API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        if (!response.ok) throw new Error("Failed to fetch courses");
        const data = await response.json();
        setEnrolledCourses(data);
        setLoadingCourses(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoadingCourses(false);
      }
    };
    fetchCourses();
  }, []);

  // Fetch Deadlines (Pending Tasks) from JSONPlaceholder
  useEffect(() => {
    const fetchDeadlines = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5&completed=false"
        );
        if (!response.ok) throw new Error("Failed to fetch deadlines");
        const data = await response.json();
        setDeadlines(data);
        
        // Calculate progress (completed tasks percentage)
        const allTodos = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        ).then((res) => res.json());
        const completed = allTodos.filter((todo) => todo.completed).length;
        const progressPercentage = Math.round((completed / allTodos.length) * 100);
        setProgress(progressPercentage);
        
        setLoadingTodos(false);
      } catch (error) {
        console.error("Error fetching deadlines:", error);
        setLoadingTodos(false);
      }
    };
    fetchDeadlines();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Welcome to your Dashboard, {userName}!</h1>
      <p className="text-gray-600 mb-8">Here's your learning overview</p>

      {/* Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Enrolled Courses Widget */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 Enrolled Courses</h3>
          {loadingCourses ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <div>
              <p className="text-4xl font-bold text-green-600 mb-2">
                {enrolledCourses.length}
              </p>
              <p className="text-sm text-gray-600">courses in progress</p>
              <div className="mt-4 space-y-2">
                {enrolledCourses.slice(0, 3).map((course) => (
                  <p key={course.id} className="text-sm text-gray-700 truncate">
                    • {course.title}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Deadlines Widget */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">⏰ Upcoming Deadlines</h3>
          {loadingTodos ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <div>
              <p className="text-4xl font-bold text-yellow-600 mb-2">
                {deadlines.length}
              </p>
              <p className="text-sm text-gray-600">pending tasks</p>
              <div className="mt-4 space-y-2">
                {deadlines.slice(0, 3).map((deadline) => (
                  <p key={deadline.id} className="text-sm text-gray-700 truncate">
                    • {deadline.title}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Progress Widget */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Overall Progress</h3>
          {loadingTodos ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">{progress}%</p>
              <p className="text-sm text-gray-600 mb-4">tasks completed</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="flex gap-3 flex-wrap">
          <button 
            onClick={() => navigate("/course")}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            View Courses
          </button>
          <button 
            onClick={() => navigate("/assignments")}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            View Assignments
          </button>
          <button 
            onClick={() => navigate("/profile")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
