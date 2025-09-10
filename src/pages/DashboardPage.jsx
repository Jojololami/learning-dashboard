import React from "react";
import { NavLink } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-[#FFFDD0] p-6">
        <nav>
          <ul className="flex flex-col gap-6 text-green-700 font-medium">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-4 text-green-900"
                    : "hover:underline"
                }
              >
                Dashboard Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-4 text-green-900"
                    : "hover:underline"
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-4 text-green-900"
                    : "hover:underline"
                }
              >
                Course Outline
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/assignments"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-4 text-green-900"
                    : "hover:underline"
                }
              >
                Assignments
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Welcome to your Dashboard!</h1>
        <p className="mt-4 text-gray-600">
          Select a page from the sidebar to continue.
        </p>
      </main>
    </div>
  );
};

export default DashboardPage;
