import axiosInstance from "../../http/axiosInstance";
import { User } from "../../types/user/User";

export const getUserList = async (): Promise<User[]> => {
  const response = await axiosInstance.get<User[]>("/users");
  return response.data;
};
