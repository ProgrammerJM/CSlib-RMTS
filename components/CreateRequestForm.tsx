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

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center dark:text-white text-black mt-10">
        <label htmlFor="status">
          Status:
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="text-black"
            required
          />
        </label>
        <label htmlFor="date_received">
          Date Received:
          <input
            type="date"
            name="date_received"
            value={formData.date_received}
            onChange={handleChange}
            className="text-black"
            required
          />
        </label>
        <label htmlFor="book_request_sources">
          Book Request Sources:
          <input
            type="text"
            name="book_request_sources"
            value={formData.book_request_sources}
            onChange={handleChange}
            className="text-black"
            required
          />
        </label>
        <label htmlFor="course_title_faculty_request">
          Course Title / Faculty Requested:
          <input
            type="text"
            name="course_title_faculty_request"
            value={formData.course_title_faculty_request}
            onChange={handleChange}
            className="text-black"
            required
          />
        </label>
        <label htmlFor="priority_no">
          Priority No.:
          <input
            type="number"
            name="priority_no"
            value={formData.priority_no || ""}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <label htmlFor="item_description">
          Item Description:
          <input
            type="text"
            name="item_description"
            value={formData.item_description || ""}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <label htmlFor="remarks">
          Remarks:
          <input
            type="text"
            name="remarks"
            value={formData.remarks || ""}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <label htmlFor="on_shelf_date">
          On Shelf Date:
          <input
            type="date"
            name="on_shelf_date"
            value={formData.on_shelf_date}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <label htmlFor="supplier">
          Supplier:
          <input
            type="text"
            name="supplier"
            value={formData.supplier || ""}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <label htmlFor="accession_no">
          Accession No.:
          <input
            type="text"
            name="accession_no"
            value={formData.accession_no || ""}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <label htmlFor="sales_invoice_no">
          Sales Invoice No.:
          <input
            type="text"
            name="sales_invoice_no"
            value={formData.sales_invoice_no || ""}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <label htmlFor="actual_cost">
          Actual Cost:
          <input
            type="number"
            step="0.01"
            name="actual_cost"
            value={formData.actual_cost || ""}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <label htmlFor="updated_book_fund">
          Updated in Book Fund:
          <input
            type="checkbox"
            name="updated_book_fund"
            checked={formData.updated_book_fund}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <label htmlFor="updated_by">
          Updated By:
          <input
            type="text"
            name="updated_by"
            value={formData.updated_by}
            onChange={handleChange}
            required
            className="text-black"
          />
        </label>
        <label htmlFor="last_remarks">
          Last Remarks:
          <input
            type="text"
            name="last_remarks"
            value={formData.last_remarks || ""}
            onChange={handleChange}
            className="text-black"
          />
        </label>

        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex justify-center items-center border mt-5"
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}
