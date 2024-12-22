import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // Using react-router instead of react-router-dom

const Reviews = () => { // Renamed the function to UserFetcher
  const [users, setUsers] = useState([]); // State to hold the user data
  const [loading, setLoading] = useState(true);

  // Fetch random users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        const randomUsers = Array.from({ length: 3 }, () => data.users[Math.floor(Math.random() * data.users.length)]);
        setUsers(randomUsers); // Set the random users data to state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl text-[#6F4E37]">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-16 h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-10 text-center text-black">
        These are our loyal customers! Buy now to get featured on our Weekly Spotlight!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {users.map((user, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md text-center bg-slate-200">
            <p className="text-2xl font-[Oswald] font-light tracking-widest">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-lg font-light tracking-wider text-gray-600">
              {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews; // Export the UserFetcher function
