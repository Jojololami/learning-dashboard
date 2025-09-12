import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faMapMarkerAlt,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  if (!user) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }

  return (
    <div className="min-h-screen bg-[#FFFDD0] p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Learn Tech Hub Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <input
                  type="text"
                  value="User"
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="absolute left-2 top-1 text-gray-400"
                  />
                  <input
                    type="text"
                    value={new Date(user.dob.date).toLocaleDateString()}
                    disabled
                    className="pl-10 mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <input
                  type="text"
                  value="Active"
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="absolute left-2 top-1 text-gray-400"
                  />
                  <input
                    type="text"
                    value={user.phone}
                    disabled
                    className="pl-10 mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  value={user.name.first}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="absolute left-2 top-1 text-gray-400"
                  />
                  <input
                    type="text"
                    value={`${user.location.city}, ${user.location.country}`}
                    disabled
                    className="pl-10 mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  value={user.name.last}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  value={user.location.country}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm text-sm"
                />
              </div>
            </div>

            <button
              type="button"
              className="mt-4 px-4 py-2 bg-[#3b7d3b] text-white rounded-md shadow hover:bg-green-700"
            >
              Update Details
            </button>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <img
              src={user.picture.large}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <p className="font-medium text-gray-800">
              {user.name.first} {user.name.last}
            </p>
            <button className="px-3 py-1 border rounded-md text-sm text-gray-600 hover:bg-gray-50">
              Change Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
