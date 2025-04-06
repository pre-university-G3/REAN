import React, { useEffect, useState } from "react";
import HeroSection from "../components/homepage/hero/HeroSection";
import PopularCourses from "../components/homepage/popularcourse/PopularCourses";
import AboutSection from "../components/homepage/about/AboutSection";
import OfferCourse from "../components/homepage/offercourse/OfferCourse";
import Faq from "../components/homepage/faq/Faq";
import ClientFeedback from "../components/homepage/clientfeedback/ClientFeedback";
import FeedbackForm from "../components/homepage/feedbackform/FeedbackForm";
import getUser from "../api/getUser";

export default function HomePage() {
  // Fetch user information
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      setUser(userData);
    };

    fetchData();
  }, []);
  console.log(user);

  // success

  return (
    <main className="flex flex-col w-full items-center space-y-24 overflow-x-hidden dark:bg-dark-bg">
      <HeroSection />
      <PopularCourses />
      <AboutSection />
      <OfferCourse />
      <Faq />
      <ClientFeedback />
      <FeedbackForm />
    </main>
  );
}
