"use client";

import { BookRequest } from "@/interfaces/BookRequest";
import React, { useEffect, useState } from "react";

interface getRequestState {
  requests: BookRequest[] | null;
  error: string | null;
  isLoading: boolean;
}

export default function GetRequest(): getRequestState {
  const [requests, setRequests] = useState<BookRequest[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true);

        const response = await fetch("http://localhost:5000/api/books/request");
        if (!response.ok) {
          throw new Error("Failed to Fetch Books");
        }
        const result: BookRequest[] = await response.json();
        setRequests(result);
      } catch (err: any) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);
  return { requests, error, isLoading };
}
