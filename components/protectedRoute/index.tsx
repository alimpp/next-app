"use client";
import Loading from "../base/loading";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/login");
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [router]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
}
