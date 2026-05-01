import { type TUsersParamsRequest } from "../types/index";
import { Get } from "@/services/http";

export const adminController = {
  async getUsersData(paramsRequest: TUsersParamsRequest) {
    try {
      const requestResponse = await Get(
        `v1/admin/users?per_page=${paramsRequest.per_page}&page=${paramsRequest.page}&search=${paramsRequest.search}`,
      );
      if (requestResponse.data) {
        const users = requestResponse.data?.users?.data;

        return users
          ? users.map((user: any) => {
              return {
                id: user.id.slice(0, 10),
                created_at: user.created_at.date_string,
                first_name: user.first_name,
                last_name: user.last_name,
                phone: user.phone ? user.phone : "-",
                email: user.email ? user.email : "-",
                role: user.role.en,
              };
            })
          : [];
      }
    } catch (err) {
      console.log(err);
    }
  },
};
