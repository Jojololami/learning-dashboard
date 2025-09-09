import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <>
      <sectiom className="flex justify-between items-center pl-16 pr-16 bg-[#FFFDD0]">
        <nav>
          <ul className="flex gap-10 items-center text-green-700">
            <li>
              <Link to="/dashboard">Dashboard Home</Link>
            </li>

            <li>
              <Link to="/profile">Profile</Link>
            </li>

            <li>
              <Link to="/course">Course</Link>
            </li>

            <li>
              <Link to="/assignments">Assignments</Link>
            </li>
          </ul>
        </nav>
      </sectiom>
    </>
  );
};

export default DashboardPage;
