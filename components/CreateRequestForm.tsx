"use client";

import { BookRequest, initialFormData } from "@/interfaces/BookRequest";
import React, { FormEvent, useState } from "react";

export default function CreateRequestForm() {
  const [formData, setFormData] = useState<BookRequest>(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "date"
          ? new Date(value).toISOString().split("T")[0]
          : value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsSubmitting(true);

      const response = await fetch(
        "http://localhost:5000/api/books/add-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit request!");
      }

      alert("Request submitted successfully!");
      setFormData(initialFormData);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  const inputStyle =
    "text-black bg-gray-100 p-2 border border-gray-300 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto p-4 bg-white shadow-md rounded-md mt-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="status" className="font-semibold text-gray-700">
              Status:
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="date_received"
              className="font-semibold text-gray-700"
            >
              Date Received:
              <input
                type="date"
                name="date_received"
                value={formData.date_received}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="book_request_sources"
              className="font-semibold text-gray-700"
            >
              Book Request Sources:
              <input
                type="text"
                name="book_request_sources"
                value={formData.book_request_sources}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="course_title_faculty_request"
              className="font-semibold text-gray-700"
            >
              Course Title / Faculty Requested:
              <input
                type="text"
                name="course_title_faculty_request"
                value={formData.course_title_faculty_request}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="priority_no"
              className="font-semibold text-gray-700"
            >
              Priority No.:
              <input
                type="number"
                name="priority_no"
                value={formData.priority_no || ""}
                onChange={handleChange}
                className={inputStyle}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="item_description"
              className="font-semibold text-gray-700"
            >
              Item Description:
              <input
                type="text"
                name="item_description"
                value={formData.item_description || ""}
                onChange={handleChange}
                className={inputStyle}
              />
            </label>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="remarks" className="font-semibold text-gray-700">
              Remarks:
              <input
                type="text"
                name="remarks"
                value={formData.remarks || ""}
                onChange={handleChange}
                className={inputStyle}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="on_shelf_date"
              className="font-semibold text-gray-700"
            >
              On Shelf Date:
              <input
                type="date"
                name="on_shelf_date"
                value={formData.on_shelf_date}
                onChange={handleChange}
                className={inputStyle}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="supplier" className="font-semibold text-gray-700">
              Supplier:
              <input
                type="text"
                name="supplier"
                value={formData.supplier || ""}
                onChange={handleChange}
                className={inputStyle}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="accession_no"
              className="font-semibold text-gray-700"
            >
              Accession No.:
              <input
                type="text"
                name="accession_no"
                value={formData.accession_no || ""}
                onChange={handleChange}
                className={inputStyle}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="sales_invoice_no"
              className="font-semibold text-gray-700"
            >
              Sales Invoice No.:
              <input
                type="text"
                name="sales_invoice_no"
                value={formData.sales_invoice_no || ""}
                onChange={handleChange}
                className={inputStyle}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="actual_cost"
              className="font-semibold text-gray-700"
            >
              Actual Cost:
              <input
                type="number"
                step="0.01"
                name="actual_cost"
                value={formData.actual_cost || ""}
                onChange={handleChange}
                className={inputStyle}
              />
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="updated_book_fund"
              checked={formData.updated_book_fund}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label
              htmlFor="updated_book_fund"
              className="font-semibold text-gray-700"
            >
              Updated in Book Fund
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="updated_by" className="font-semibold text-gray-700">
              Updated By:
              <input
                type="text"
                name="updated_by"
                value={formData.updated_by}
                onChange={handleChange}
                required
                className={inputStyle}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="last_remarks"
              className="font-semibold text-gray-700"
            >
              Last Remarks:
              <input
                type="text"
                name="last_remarks"
                value={formData.last_remarks || ""}
                onChange={handleChange}
                className={inputStyle}
              />
            </label>
          </div>
        </div>
      </div>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex justify-center items-center bg-gray-800 text-white font-semibold py-2 px-4 rounded-md mt-6 hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
