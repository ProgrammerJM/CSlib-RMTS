"use client";

import CreateRequestForm from "@/components/CreateRequestForm";
import RequestTable from "@/components/RequestTable";
import GetRequest from "@/hooks/getRequest";
import React from "react";

function Requests() {
  const { requests: bookRequests, error, isLoading } = GetRequest();

  const requests =
    bookRequests?.map((bookRequest) => ({
      ...bookRequest,
      item_description: bookRequest.item_description || "",
    })) || null;

  return (
    <div>
      <CreateRequestForm />
      <RequestTable requests={requests} error={error} isLoading={isLoading} />
    </div>
  );
}

export default Requests;
