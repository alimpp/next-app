"use client";

import { adminController } from "../controller";

import BaseTable from "@/components/base/table";
import ProtectedRoute from "@/components/protectedRoute/index";
import { useState, useEffect } from "react";

function UsersPage() {
  const tableHeader = [
    "Id",
    "Firstname",
    "Lastname",
    "Phone",
    "Email",
    "Role",
    "Created At",
  ];

  const [tableDataSource, setTableDataSource] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUsersData() {
      const requestResponse = await adminController.getUsersData({
        per_page: 10,
        page: 1,
        search: "",
      });
      setTableDataSource(requestResponse);
    }

    getUsersData();
  }, []);

  return (
    <ProtectedRoute>
      <div className="container">
        <BaseTable headers={tableHeader} data={tableDataSource} />
      </div>
    </ProtectedRoute>
  );
}

export default UsersPage;
