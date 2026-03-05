import { account } from "./appwrite";
import { ID } from "appwrite";

export const registerUser = async (email: string, password: string) => {
  return await account.create(ID.unique(), email, password);
};

export const loginUser = async (email: string, password: string) => {
  return await account.createEmailPasswordSession(email, password);
};

export const logoutUser = async () => {
  return await account.deleteSession("current");
};

export const getCurrentUser = async () => {
  return await account.get();
};