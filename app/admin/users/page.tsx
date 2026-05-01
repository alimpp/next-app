"use client";

import BaseTable from "@/components/base/table";
import ProtectedRoute from "@/components/protectedRoute/index";

function UsersPage() {
  const simpleUsersData = [
    { id: 1, name: "علی احمدی", email: "ali.ahmadi@example.com", role: "مدیر" },
    {
      id: 2,
      name: "مریم رضایی",
      email: "maryam.rezaei@example.com",
      role: "کاربر",
    },
    {
      id: 3,
      name: "حسین کریمی",
      email: "hossein.karimi@example.com",
      role: "کاربر",
    },
    {
      id: 4,
      name: "زهرا صالحی",
      email: "zahra.salehi@example.com",
      role: "مهمان",
    },
  ];
  const simpleUserHeaders = ["شناسه", "نام کامل", "آدرس ایمیل", "نقش کاربری"];

  return (
    <ProtectedRoute>
      <div className="container">
        <BaseTable headers={simpleUserHeaders} data={simpleUsersData} />
      </div>
    </ProtectedRoute>
  );
}

export default UsersPage;
