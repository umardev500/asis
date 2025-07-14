import { BASE_URL } from "@/src/constants";

const _login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const uri = `${BASE_URL}/login`;

  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Login failed");
  }

  return response.json();
};

export const auth = {
  login: _login,
};
