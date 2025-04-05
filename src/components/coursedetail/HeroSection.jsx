import React from 'react'

export default function HeroSection() {
  return (
    <section className='flex flex-col w-full bg-primary md:h-[100vh] md:flex-row justify-center overflow-clip pt-[5px] px-30'>
        <article className='space-y-8 w-full  md:h-full md:w-[90vw] flex flex-col justify-center text-center md:text-start'>
            <div>
                <nav className="text-white text-body-text-large ">
                    <a href="#" class="hover:text-accent">Course <span className='mx-3'>&gt;</span> </a> 
                    <a href="#"  class="hover:text-accent ">Web Development <span className='mx-3'>&gt;</span> </a> 
                    <a href="#"   class="hover:text-accent">Learning</a>
                </nav>
            </div>
            <h1 className='text-white text-h1-large font-bold  '>
                Front End Web Development
            </h1>
            <div className="flex items-center mt-3">
                <span className="text-yellow-400 text-lg">★★★★</span>
                <span className="text-white text-detail-large ml-2">4.0 Stars</span>
                <span className="text-white text-body-text-large ml-6">| 34 Hours</span>
            </div>
            <p className='text-white text-detail-large mt-5 '>
            These projects will help you find your feet on the Frontend Mentor platform and give you experience working with designs and building small projects. They're all HTML & CSS-only challenges, so they'll help you pick up the basics.
            </p>
            <h1 className='text-white text-h2-large font-bold '>
            Available now
            </h1>
            <div className='flex space-x-2'>
                <button className='large-button'>
                    Start Learning
                </button>
                <button className='border-3 bg-white text-accent text-detail-large border-accent px-8 py-2 rounded-md hover:bg-green-900'>
                    Save Later
                </button>
            </div>
        </article>
        <figure className='w-full flex justify-center items-center'>
            <img src=".." alt="" />
        </figure>
    </section>
  )
}
