export const getUser = async (accessToken) => {
  const response = await fetch("https://course-api.istad.co/api/v1/user/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });
  if (!response.ok) {
    throw new Error();
  }
  const data = await response.json();
  return data;
};
