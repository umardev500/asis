import { BASE_URL } from "@/src/constants";
import {
  PresentApiResponse,
  SavePresentPayload,
  SavePresentResponse,
} from "@/src/types";
import { getToken } from "@/src/utils";

const _getAll = async (page: number = 1) => {
  console.log("get all");
  const uri = `${BASE_URL}/presensi/get-data?page=${page}`;
  const token = await getToken();

  const response = await fetch(uri, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const jsonData: PresentApiResponse = await response.json();

  // If your API does not return success, throw an error:
  if (!jsonData.success) {
    throw new Error(jsonData.message || "API returned error");
  }

  return jsonData;
};

const _save = async (
  payload: SavePresentPayload
): Promise<SavePresentResponse> => {
  const uri = `${BASE_URL}/presensi/save-data`;
  const token = await getToken();

  const response = await fetch(uri, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} - ${response.statusText}`);
  }

  const jsonData: SavePresentResponse = await response.json();

  if (!jsonData.success) {
    throw new Error(jsonData.message || "Save present failed");
  }

  return jsonData;
};

export const present = {
  getAll: _getAll,
  save: _save,
};
