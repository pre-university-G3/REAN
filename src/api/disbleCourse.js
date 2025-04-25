const disableCourse = async (id) => {
  const response = fetch(
    `https://course-api.istad.co/api/v1/courses/${id}/disable`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
  if ((await response).status === 204) {
    console.log("Course Disabled");
  } else {
    console.log("Fail to disable course");
  }
};

export default disableCourse;
