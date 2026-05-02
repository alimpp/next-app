import React from "react";

import { type TUsersData } from "../../types";

import BaseCard from "@/components/base/card";

interface UsersCardProps {
  data: TUsersData;
}

const UsersCard: React.FC<UsersCardProps> = ({ data }) => {
  return (
    <BaseCard>
      <div className="flex flex-column">
        <span className="title">Id</span>
        <span className="value">{data.id}</span>
        <span className="title">Carete At</span>
        <span className="value">{data.created_at}</span>
        <span className="title">Firstname</span>
        <span className="value">{data.first_name}</span>
        <span className="title">Lastname</span>
        <span className="value">{data.last_name}</span>
        <span className="title">Phone</span>
        <span className="value">{data.phone}</span>
        <span className="title">Email</span>
        <span className="value">{data.email}</span>
        <span className="title">Role</span>
        <span className="value">{data.role}</span>
      </div>
    </BaseCard>
  );
};

export default UsersCard;
