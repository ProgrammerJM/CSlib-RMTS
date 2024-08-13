import React from "react";

const BookFunds = () => {
  const addBook = () => {
    console.log("Add book");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button className="border p-2 mb-2"> + Add book</button>
      <table>
        <thead>
          <tr>
            <th>Book 1</th>
            <th>Book 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookFunds;
