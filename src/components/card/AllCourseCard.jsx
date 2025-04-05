import React from 'react'

export default function AllCourseCard(props) {
    const {id, avatar, title, subtitle, description, lesson, time} = props;
  return (
    <>
        <div className="w-[280px] h-[499px] flex flex-col gap-y-4">
            <img className='w-full h-[222px]' src={avatar}/>
            <div className="flex flex-col gap-y-4 items-start bg-white shadow-xl"> 
                <span>{title}</span>
                <span className="text-accent-light">{subtitle}</span>
                <span>{description}</span>
                <div className="w-[237px] h-1 bg-gray-400"></div>
                <img src="/images/lesson.svg" alt="" />
                <span>{lesson} Lessons</span>
                <img src="/images/time.svg" alt="" />
                <span>{time} Hours</span>
                <input className='w-[237px] h-8 bg-accent-light text-white text-xl' type="button" value="Save" />
            </div>
        </div>
        <div className="w-[285px] h-[499px] flex flex-col gap-y-4">
            <img className='w-full h-[222px]' src={avatar}/>
            <div className="flex flex-col gap-y-4 items-start bg-white shadow-xl"> 
                <span>{title}</span>
                <span className="text-accent-light">{subtitle}</span>
                <span>{description}</span>
                <div className="w-[237px] h-1 bg-gray-400"></div>
                <img src="/images/lesson.svg" alt="" />
                <span>{lesson} Lessons</span>
                <img src="/images/time.svg" alt="" />
                <span>{time} Hours</span>
                <input className='w-[237px] h-8 bg-accent-light text-white text-xl' type="button" value="Save" />
            </div>
        </div>
    </>
  )
}
