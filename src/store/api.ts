import axios from "axios";
import { UserResponse, User } from "./models";

export const conduitApi = axios.create({
  baseURL: "https://randomuser.me/api"
});

export async function fetchUser(): Promise<User> {
  const response = await conduitApi.get("/?results=10");
  return response.data;
}
