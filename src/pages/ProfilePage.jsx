import React from 'react'
import Profile from '../components/Profile/ProfileCourse'
import ProfileSaved from '../components/Profile/ProfileSaved'
import UserEnroll from '../components/Profile/UserEnroll'
import UserProfile from '../components/Profile/UserProfile'
export default function ProfilePage() {
  return (
    <main>
      <>
      <Routes>
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/my-course" element={<UserEnroll />} />
          <Route path="/saved" element={<ProfileSaved />} />
        </Routes>
      </>
    </main>
  )
}
