import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCheckCircle,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";

function AssignmentsPage() {
  const assignments = [
    {
      id: 1,
      title: "Introduction to Web Development",
      dueDate: "2025-09-20",
      status: "Completed",
    },
    {
      id: 2,
      title: "HTML Fundamentals",
      dueDate: "2025-09-20",
      status: "Completed",
    },
    {
      id: 3,
      title: "CSS Fundamentals",
      dueDate: "2025-09-20",
      status: "Pending",
    },

    {
      id: 4,
      title: "Layout & Responsive Design",
      dueDate: "2025-09-20",
      status: "Pending",
    },
    {
      id: 5,
      title: "JavaScript Fundamentals",
      dueDate: "2025-09-20",
      status: "Pending",
    },
    {
      id: 6,
      title: "Advanced JavaScript",
      dueDate: "2025-09-20",
      status: "Pending",
    },

    {
      id: 7,
      title: "Version Control & Collaboration",
      dueDate: "2025-09-20",
      status: "Pending",
    },
    {
      id: 8,
      title: "Frontend Frameworks & Libraries",
      dueDate: "2025-09-20",
      status: "Pending",
    },
    {
      id: 9,
      title: "Styling in Modern Frontend",
      dueDate: "2025-09-20",
      status: "Pending",
    },
    {
      id: 10,
      title: "Capstone Project & Deployment",
      dueDate: "2025-09-20",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDD0] p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Your Assignments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="border rounded-lg shadow-sm p-4 bg-gray-50 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {assignment.title}
              </h3>

              <p className="flex items-center text-sm text-gray-600 mb-2">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="mr-2 text-green-500"
                />
                Due: {assignment.dueDate}
              </p>

              <p className="flex items-center text-sm font-medium">
                {assignment.status === "Completed" ? (
                  <>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 text-green-600"
                    />
                    <span className="text-green-600">Completed</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon
                      icon={faHourglassHalf}
                      className="mr-2 text-yellow-600"
                    />
                    <span className="text-yellow-600">Pending</span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AssignmentsPage;
