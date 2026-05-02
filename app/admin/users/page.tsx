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
import EmptyState from "../components/emptyState";

import { useRouter } from "next/navigation";
import BasePagination from "@/components/base/pagination";

function UsersPage() {
  const tableHeader = [
    "Id",
    "Created At",
    "Firstname",
    "Lastname",
    "Phone",
    "Email",
    "Role",
  ];

  const [tableDataSource, setTableDataSource] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const unauthorizedState = () => {
    router.push("/auth/login");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    async function getUsersData() {
      setLoading(true);
      const requestResponse = await adminController.getUsersData({
        per_page: 5,
        page: 1,
        search: searchValue,
      });
      if (requestResponse.status === 401) {
        unauthorizedState();
      } else {
        setTableDataSource(requestResponse ? requestResponse : []);
      }
      setLoading(false);
    }
    getUsersData();
  }, [searchValue]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setPage(1);
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(async () => {
      setLoading(true);
      const requestResponse = await adminController.getUsersData({
        per_page: 5,
        page: 1,
        search: value,
      });
      if (requestResponse.status === 401) {
        unauthorizedState();
      } else {
        setTableDataSource(requestResponse ? requestResponse : []);
      }
      setLoading(false);
    }, 0);
  };

  const getDataWidthPage = async (p: number) => {
    setPage(p);
    setLoading(true);
    const requestResponse = await adminController.getUsersData({
      per_page: 5,
      page: p,
      search: searchValue,
    });
    if (requestResponse.status === 401) {
      unauthorizedState();
    } else {
      setTableDataSource(requestResponse ? requestResponse : []);
    }
    setLoading(false);
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
        {tableDataSource.length === 0 ? (
          <EmptyState />
        ) : (
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
        )}
        <div className="bottom-bar w-full mt-10 flex align-center">
          <BasePagination
            currentPage={page}
            disabledNext={tableDataSource.length < 5}
            onPageChange={(p) => getDataWidthPage(p)}
          />
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default UsersPage;
