import { BASE_URL, TOKEN } from "@/src/constants";
import { PresentApiResponse } from "@/src/types";

const _getAll = async (page: number = 1) => {
  const uri = `${BASE_URL}/presensi/get-data?page=${page}`;
  const response = await fetch(uri, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const jsonData: PresentApiResponse = await response.json();

  // If your API does not return success, throw an error:
  if (!jsonData.success) {
    throw new Error(jsonData.message || "API returned error");
  }

  return jsonData;
};

export const present = {
  getAll: _getAll,
};
