"use client";
import "./styles/index.css";
import { adminController } from "../controller";

import BaseTable from "@/components/base/table";
import BaseCard from "@/components/base/card";
import BaseInput from "@/components/base/input";
import ProtectedRoute from "@/components/protectedRoute/index";
import { useState, useEffect, useRef } from "react";

import { type TUsersData } from "../types";

import UsersCard from "../components/usersCard";
import Loading from "../components/loading/index";

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

  const [tableDataSource, setTableDataSource] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    async function getUsersData() {
      setLoading(true);
      const requestResponse = await adminController.getUsersData({
        per_page: 10,
        page: 1,
        search: searchValue,
      });
      setTableDataSource(requestResponse);
      setLoading(false);
    }

    getUsersData();
  }, [searchValue]);

  const handleSearch = (value: string) => {
    setSearchValue(value);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(async () => {
      setLoading(true);
      const requestResponse = await adminController.getUsersData({
        per_page: 10,
        page: 1,
        search: value,
      });
      setTableDataSource(requestResponse);
      setLoading(false);
    }, 0);
  };

  return (
    <ProtectedRoute>
      {loading ? <Loading /> : ""}
      <div className="container">
        <div className="topbar-content mb-10">
          <BaseInput
            placeholder="Search By Keyword"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="content fade-animation">
          <div className="table-view ">
            <BaseCard>
              <BaseTable headers={tableHeader} data={tableDataSource} />
            </BaseCard>
          </div>
          <div className="card-view flex flex-column">
            {tableDataSource.map((item: TUsersData, itemIndex) => (
              <div className="mt-10" key={itemIndex}>
                <UsersCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default UsersPage;
