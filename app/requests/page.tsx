// import React from "react";

// const Requests = () => {
//   return <div className="flex justify-center items-center">Requests</div>;
// };

// export default Requests;

"use client";

import React, { useState, useEffect } from "react";

interface User {
  id: number;
  username: string;
  role: string;
}

async function fetchUsers() {
  try {
    const response = await fetch(
      "http://localhost:5000/api/getUsers/allUsers",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data;
  } catch (err: any) {
    console.error(err.message);
  }
}

export default function Requests() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        console.log("Setting users:", data); // Debugging log
        setUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1>Users List</h1>
        <ul className="flex flex-col justify-center items-center">
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
