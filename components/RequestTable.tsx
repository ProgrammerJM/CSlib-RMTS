import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { BookRequest } from "@/interfaces/BookRequest";

interface RequestTableProps {
  requests: BookRequest[] | null;
  error: string | null;
  isLoading: boolean;
}

const RequestTable: React.FC<RequestTableProps> = ({
  requests,
  error,
  isLoading,
}) => {
  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!requests) return <p>No Data Available</p>;

  return (
    <Table aria-label="Requests Table">
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
        {requests.length > 0 ? (
          requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.status}</TableCell>
              <TableCell>{request.date_received}</TableCell>
              <TableCell>{request.book_request_sources}</TableCell>
              <TableCell>{request.course_title_faculty_request}</TableCell>
              <TableCell>{request.priority_no}</TableCell>
              <TableCell>{request.item_description}</TableCell>
              <TableCell>{request.remarks}</TableCell>
              <TableCell>{request.on_shelf_date}</TableCell>
              <TableCell>{request.supplier}</TableCell>
              <TableCell>{request.accession_no}</TableCell>
              <TableCell>{request.sales_invoice_no}</TableCell>
              <TableCell>{request.actual_cost}</TableCell>
              <TableCell>{request.updated_book_fund ? "Yes" : "No"}</TableCell>
              <TableCell>{request.updated_by}</TableCell>
              <TableCell>{request.last_remarks}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell>No Data Available</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default RequestTable;
