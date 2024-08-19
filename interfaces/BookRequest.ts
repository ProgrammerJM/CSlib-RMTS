export const initialFormData: BookRequest = {
  status: "",
  date_received: new Date().toISOString().split("T")[0],
  book_request_sources: "",
  course_title_faculty_request: "",
  priority_no: undefined,
  item_description: "",
  remarks: "",
  on_shelf_date: new Date().toISOString().split("T")[0],
  supplier: "",
  accession_no: "",
  sales_invoice_no: "",
  actual_cost: undefined,
  updated_book_fund: false,
  updated_by: "",
  last_remarks: "",
};

export interface BookRequest {
  status: string;
  date_received: string;
  book_request_sources: string;
  course_title_faculty_request: string;
  priority_no?: number;
  item_description: string | undefined;
  remarks?: string;
  on_shelf_date: string;
  supplier?: string;
  accession_no?: string;
  sales_invoice_no?: string;
  actual_cost?: number;
  updated_book_fund?: boolean;
  updated_by: string;
  last_remarks?: string;
}
