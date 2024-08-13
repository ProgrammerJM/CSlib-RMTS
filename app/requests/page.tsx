"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";

export default function Requests() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader className="flex justify-center items-center text-center">
        <TableColumn>Status</TableColumn>
        <TableColumn>Date Received</TableColumn>
        <TableColumn>Book Request Sources</TableColumn>
        <TableColumn>Course Title / Faculty Requested</TableColumn>
        <TableColumn>Priority No.</TableColumn>
        <TableColumn>Item Description</TableColumn>
        <TableColumn>Remarks</TableColumn>
        <TableColumn>On Shelf (Indicate Date)</TableColumn>
        <TableColumn>Supplier</TableColumn>
        <TableColumn>Accession No.</TableColumn>
        <TableColumn>Sales Invoice No.</TableColumn>
        <TableColumn>Actual Cost</TableColumn>
        <TableColumn>Updated in Book Fund</TableColumn>
        <TableColumn>Updated By</TableColumn>
        <TableColumn>Last Remarks</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Status Value</TableCell>
          <TableCell>Date Received Value</TableCell>
          <TableCell>Book Request Sources Value</TableCell>
          <TableCell>Course Title / Faculty Requested Value</TableCell>
          <TableCell>Priority No. Value</TableCell>
          <TableCell>Item Description Value</TableCell>
          <TableCell>Remarks Value</TableCell>
          <TableCell>On Shelf (Indicate Date) Value</TableCell>
          <TableCell>Supplier Value</TableCell>
          <TableCell>Accession No. Value</TableCell>
          <TableCell>Sales Invoice No. Value</TableCell>
          <TableCell>Actual Cost Value</TableCell>
          <TableCell>Updated in Book Fund Value</TableCell>
          <TableCell>Updated By Value</TableCell>
          <TableCell>Last Remarks Value</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

// "use client";

// import React, { useState, useEffect } from "react";

// interface User {
//   id: number;
//   username: string;
//   role: string;
// }

// async function fetchUsers() {
//   try {
//     const response = await fetch(
//       "http://localhost:5000/api/getUsers/allUsers",
//       {
//         cache: "no-store",
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch users");
//     }

//     const data = await response.json();
//     return data;
//   } catch (err: any) {
//     console.error(err.message);
//   }
// }

// export default function Requests() {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     fetchUsers()
//       .then((data) => {
//         console.log("Setting users:", data); // Debugging log
//         setUsers(data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       <div className="flex flex-col justify-center items-center">
//         <h1>Users List</h1>
//         <ul className="flex flex-col justify-center items-center">
//           {users.map((user) => (
//             <li key={user.id}>
//               {user.username} - {user.role}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
