
import React from 'react'
import HeroSection from "../components/coursedetail/HeroSection";
import DropDown from "../components/coursedetail/DropDown"
import AllCourseCard from "../components/card/AllCourseCard"

export default function CourseDetail() {
  return (
    <main className='flex flex-col items-center'>
        <HeroSection />

        <section className='flex flex-col w-full md:h-[70vh] pt-[50px] px-30'>
          <h1 className='text-accent text-h2-large font-bold'>
              Course Content
          </h1>
          {/* Cours content */}
          <DropDown />
        </section>
          {/* Description */}
        <section className='flex flex-col w-full md:h-[40vh] pt-[50px] px-30'>
          <h1 className='text-accent text-h2-large font-bold'>
              Description
          </h1>
          <p className='text-primary text-body-text-large mt-10'>
          It would be best to have a basic understanding of HTML and CSS. If you still need to learn the fundamentals, we link to some excellent resources inside the path. We recommend starting the path and using the resources to boost your knowledge before tackling the first challenge.
          </p>
        </section>
          {/* All course */}
        <section className='flex flex-col w-full md:h-[100vh] pt-[30px] px-30'>
            <h1 className='text-accent text-h2-large font-bold'>
                All Course
            </h1>
            <div className='mt-5'>
                <nav className='text-gray-500'>
                    <a href="#" className='hover:text-accent text-body-text-large'>View More <span className='mx-3'>&gt;</span></a>
                </nav>
            </div>
            <AllCourseCard />
        </section>
          {/* Instructor */}
        <section className='flex flex-col w-full md:h-[60vh] pt-[30px] px-30 '>
                <h1 className='text-accent text-h2-large font-bold'>
                    Instructor
                </h1>
            <article className='bg-white rounded-lg shadow-md border p-10 mt-10 border-black'>
                <div className='flex flex-row gap-5'>
                    <figure className='flex-shrink-0'>
                        <img src="https://img-c.udemycdn.com/user/200_H/12013100_e696_6.jpg" alt="" className='w-50 h-50 rounded-full object-cover'/>
                    </figure>
                    <div className='flex-grow'>
                        <h1 className='text-h3-large text-primary font-bold mb-3'>
                            Joseph Delgadillo
                        </h1>
                        <p className='text-body-text-large text-primary mt-2'>
                        Joseph Delgadillo is the founder of JTD Courses, an education technology company. He has been active in the online learning industry since 2015 and has worked with several prominent companies. As of 2024, over 1 million students across the globe have enrolled in his courses covering network security, Python programming, web development and more.
                        </p>
                    </div>
                </div>  
            </article>
        </section>
    </main>
  )
}
