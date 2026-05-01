import { type TLoginBodyRequest } from "../types";

export const authController = {
  async login(bodyRequest: TLoginBodyRequest): Promise<T> {
    console.log(bodyRequest);
  },
};
