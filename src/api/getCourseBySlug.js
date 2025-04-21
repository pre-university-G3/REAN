const getCourseBySlug = async (slug) => {
  try {
    const response = await fetch(
      `https://course-api.istad.co/api/v1/courses/slug/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message ||
          `Failed to fetch course: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Error fetching course with slug ${slug}:`, error);
    throw error; // Re-throw to let the caller handle it
  }
};

export default getCourseBySlug;
