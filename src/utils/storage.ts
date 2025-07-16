import { UserProfile } from "@/src/types";
import * as SecureStore from "expo-secure-store";

export const saveToken = async (token: string) => {
  await SecureStore.setItemAsync("token", token);
};

export const getToken = async () => {
  return await SecureStore.getItemAsync("token");
};

export const removeToken = async () => {
  await SecureStore.deleteItemAsync("token");
};

export const saveUserProfile = async (profile: UserProfile) => {
  await SecureStore.setItemAsync("profile", JSON.stringify(profile));
};

export const getUserProfile = async () => {
  return await SecureStore.getItemAsync("profile");
};

export const removeUserProfile = async () => {
  await SecureStore.deleteItemAsync("profile");
};
