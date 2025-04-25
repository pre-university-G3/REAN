import "./App.css";
import { AllCourses } from "./pages/AllCourses";
import { BrowserRouter, Route, Routes } from "react-router";
import RegisterForm from "./components/form/RegisterForm";
import HomePage from "./pages/HomePage";
import LoginForm from "./components/form/LoginForm";
import React, { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import Layout from "./route/Layout";
import AuthPage from "./pages/AuthPage";
import FileNotFound from "./components/filenotfound/FileNotFound";
import CourseDetail from "./pages/CourseDetail";
import LearningPage from "./pages/LearningPage";
import HtmlHyperlinks from "./components/learningpage/allpages/HtmlHyperlinks.jsx";
import AudioHtml from "./components/learningpage/allpages/AudioHtml.jsx";
import Video from "./components/learningpage/allpages/Video.jsx";
import Image from "./components/learningpage/allpages/Image.jsx";
import TextFormat from "./components/learningpage/allpages/TextFormat.jsx";
import List from "./components/learningpage/allpages/List.jsx";
import Table from "./components/learningpage/allpages/Table.jsx";
import Color from "./components/learningpage/allpages/Color.jsx";
import SpanAndDiv from "./components/learningpage/allpages/SpanAndDiv.jsx";
import MetaTag from "./components/learningpage/allpages/MetaTag.jsx";
import Iframe from "./components/learningpage/allpages/Iframe.jsx";
import Button from "./components/learningpage/allpages/Button.jsx";
import Form from "./components/learningpage/allpages/Form.jsx";
import "./App.css";
import UserProfile from "./components/Profile/UserProfile";
import UserEnroll from "./components/Profile/UserEnroll";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./route/ProtectedRoute";
import UserRoute from "./route/UserRoute";
import getUser from "./api/getUser";
import DashboardRoute from "./route/DashboardRoute";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      setUser(data || []);
    };

    fetchUser();
  }, []);
  if (user?.id === "680b7b62dae442405053065d") {
    return <DashboardRoute />;
  }
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Route */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/courses"
            element={
              <Layout>
                <AllCourses />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <ProfilePage>
                <UserProfile />
              </ProfilePage>
            }
          />
          {/* <Route path="/coursedetail/:slug" element={<CourseDetail />} /> */}
          <Route
            path="/saved"
            element={
              <ProfilePage>
                <UserEnroll />
              </ProfilePage>
            }
          />

          <Route
            path="/course/:slug"
            element={
              <Layout>
                <CourseDetail />
              </Layout>
            }
          />

          <Route path="/learning_page" element={<LearningPage />} />

          <Route path="/html_hyperlinks" element={<HtmlHyperlinks />} />

          <Route path="/html_video" element={<Video />} />

          <Route path="/html_audio" element={<AudioHtml />} />

          <Route path="/html_image" element={<Image />} />

          <Route path="/html_text_formatting" element={<TextFormat />} />

          <Route path="/html_list" element={<List />} />

          <Route path="/html_table" element={<Table />} />

          <Route path="/html_color" element={<Color />} />

          <Route path="/html_span_and_div" element={<SpanAndDiv />} />

          <Route path="/html_meta_tag" element={<MetaTag />} />

          <Route path="/html_iframes" element={<Iframe />} />

          <Route path="/html_button" element={<Button />} />

          <Route path="/html_form" element={<Form />} />
        </Route>

        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <AllCourses />
            </Layout>
          }
        />

        {/* User Mode Route */}
        <Route element={<UserRoute />}>
          <Route
            path="/register"
            element={
              <AuthPage>
                <RegisterForm />
              </AuthPage>
            }
          />
          <Route
            path="/login"
            element={
              <AuthPage>
                <LoginForm />
              </AuthPage>
            }
          />
        </Route>

        <Route path="*" element={<FileNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
