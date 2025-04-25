const deleteCourse = async (id) => {
  const response = fetch(`https://course-api.istad.co/api/v1/courses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  if ((await response).status === 204) {
    console.log("Course Deleted");
  } else {
    console.log("Fail to delete course");
  }
};

export default deleteCourse;
