"use client";
import "./styles/index.css";
import { adminController } from "../controller";

import BaseTable from "@/components/base/table";
import BaseCard from "@/components/base/card";

import ProtectedRoute from "@/components/protectedRoute/index";
import { useState, useEffect, useRef } from "react"; // useRef رو اضافه کن

import { type TUsersData } from "../types";
import UsersCard from "../components/usersCard";
import BaseInput from "@/components/base/input";

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

  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef(searchValue);

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setTimeout(async () => {
      const requestResponse = await adminController.getUsersData({
        per_page: 10,
        page: 1,
        search: searchRef.current,
      });
      setTableDataSource(requestResponse);
    }, 2000);
  };

  return (
    <ProtectedRoute>
      <div className="container">
        <div className="topbar-content mb-10">
          <BaseInput
            placeholder="Search By Keyword"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="content">
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
