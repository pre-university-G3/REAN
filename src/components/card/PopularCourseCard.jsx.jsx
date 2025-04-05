import React from 'react'

export default function PopularCourseCard(props) {
  const {id, avatar, title, subtitle, description, lesson, time} = props;
  return (
    <>
    <div className="w-[272px] h-[400px] flex flex-col shadow-sm rounded-md">
        <img className='h-[180px] rounded-t-xl' src={avatar}/>
        <div className="flex flex-col h-full gap-y-3 px-6 bg-white rounded-md">
            <div className="flex flex-col mt-4 gap-y-1"> 
              <span className="text-lg text-start"><b>{title}</b></span>
              <span className="text-accent-light text-sm">{subtitle}</span>
            </div>
            <span className="text-xs text-gray-600">{description}</span>
            <div className="flex flex-col gap-y-2 ">
              <div className="w-[200px] h-[0.0625rem] bg-gray-400"></div>
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <img className="w-[14px]" src="/images/lesson.svg" alt="" />
                    <span className="text-xs text-gray-600">{lesson} Lessons</span>
                  </div>
                  <div className="flex gap-1">
                    <img className="w-[14px]" src="/images/time.svg" alt="" />
                    <span className="text-xs text-gray-600">{time} Hours</span>
                  </div>
                </div>
            </div>
            <input className='w-[200px] h-8 bg-accent-light text-white text-md rounded-md mt-1' type="button" value="Save" />
        </div>
    </div>
    </>
  )
}
