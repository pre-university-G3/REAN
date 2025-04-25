const getPrivateCourses = async () => {
  const response = await fetch(
    "https://course-api.istad.co/api/v1/courses/private?part=SNIPPET&page=0&size=20",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Invalid fetching courses");
  }

  const data = await response.json();
  return data;
};

export default getPrivateCourses;
