const enableCourse = async (id) => {
  const response = fetch(
    `https://course-api.istad.co/api/v1/courses/${id}/enable`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
  if ((await response).status === 204) {
    console.log("Course Enabled");
  } else {
    console.log("Fail to enable course");
  }
};

export default enableCourse;
