import { type TLoginBodyRequest } from "../types";
import { Post } from "@/services/http";

export const authController = {
  async login(bodyRequest: TLoginBodyRequest): Promise<boolean | undefined> {
    try {
      const requestResponse = await Post(
        "v2/auth/login-via-password",
        bodyRequest,
      );
      if (requestResponse.data) {
        localStorage.setItem("token", requestResponse.data);
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  },
};
