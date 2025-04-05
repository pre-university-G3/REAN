import AllCourseCard from "../components/card/AllCourseCard.jsx"
import CategoryCard from "../components/card/CategoryCard.jsx"
import PopularCourseCard from "../components/card/PopularCourseCard.jsx"
import AllCourseData from "../data/allCourses/AllCourses.js"
import CategoryData from "../data/allCourses/Category.js"
import PopularCourseData from "../data/allCourses/PopularCourses.js"

export function AllCourses() {
    return (
        <>
        {/* <main className="bg-white">
            <section className="w-full bg-gray-200 h-[400px] flex flex-col items-center justify-center">
                    <div className="text-center flex flex-col items-center gap-y-4">
                        <h1 className="text-primary-light text-2xl md:text-4xl lg:text-5xl"><b>Discover Your Next<br/>Learning Adventure</b></h1>
                        <div className="hidden">
                            <h3 className="text-primary-light md:text-md lg:text:md">Unlock a world of knowledge with our expert-led IT courses.
                            Whether <br/> you're a beginner or an experienced professional,
                            we have something for<br/>everyone. Start learning today!
                            </h3>
                        </div>
                        <div className="absolute top-10 left-1/6 w-6 h-6 bg-accent-light rounded-full"></div>
                        <div className="absolute top-40 right-1/8 w-4 h-4 bg-secondary-light rounded-full"></div>
                        <div className="absolute bottom-120 left-1/4 w-4 h-4 bg-secondary-light rounded-full"></div>
                        <img className="absolute top-32 left-1/10" src="/images/light.svg"/>
                        <img className="absolute top-12 right-1/6" src="/images/ufo.svg"/>
                        <div className="md:hidden lg:hidden">
                            <h3 className="text-primary-light text-xs">Unlock a world of knowledge with our expert-led IT courses.
                            <br/>Whether you're a beginner or an experienced professional,
                                we have <br/> something for everyone. Start learning today!
                            </h3>
                        </div>
                        <div className="text-gray-500 w-68 md:w-120 lg:w-160 h-12 px-4 bg-white p-2 rounded-md flex justify-between items-center shadow-sm">
                            <input className="text-xs md:text-md focus:outline-none w-full h-full" type="search" name="search" id="search" placeholder="Search" />
                            <i class="text-xs md:text-md fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
            </section>
        <section>
            <div className="flex gap-x-4 overflow-scroll w-full px-30 py-8">
                {CategoryData.map((category) => (
                    <CategoryCard key={category.id} title={category.title} icon={category.icon} />
                ))}
            </div>
        </section>
       
        <div className="px-5 md:px-15 py-4 lg:px-30">
            <h2 className="text-2xl text-primary-light"><b>Popular Courses</b></h2>
        </div>
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:gap-50 lg:grid-cols-4 gap-5 px-30">
                {PopularCourseData.map((course) => (
                    <PopularCourseCard key={course.id} avatar={course.avatar} title={course.title}
                                       subtitle={course.subtitle} icon={course.icon} lesson={course.lesson} 
                                       time={course.time} description={course.description} />
                ))}
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-30">
                <h2><b>All Courses</b></h2>
                {AllCourseData.map((course) => (
                    <AllCourseCard key={course.id} avatar={course.avatar} title={course.title} subtitle={course.subtitle} icon={course.icon} />
                ))}</div>
        </section>
        </main> */}
        <main className="bg-white">
            <section className="w-full bg-gray-200 h-[400px] md:h-[500px] relative overflow-hidden flex flex-col items-center justify-center px-4">
                <div className="text-center flex flex-col items-center gap-y-4 max-w-4xl mx-auto">
                <h1 className="text-primary-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    Discover Your Next<br className="hidden sm:inline"/> Learning Adventure
                </h1>

                <div className="absolute top-10 left-1/6 w-6 h-6 bg-accent-light rounded-full"></div>
                <div className="absolute top-40 right-1/8 w-4 h-4 bg-secondary-light rounded-full"></div>
                <div className="absolute bottom-30 left-1/4 w-4 h-4 bg-secondary-light rounded-full"></div>
                <img className="absolute top-32 left-1/10 w-8 h-8" src="/images/light.svg" alt="decoration"/>
                <img className="absolute top-12 right-1/6 w-8 h-8" src="/images/ufo.svg" alt="decoration"/>
                
                <p className="text-primary-light text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                    Unlock a world of knowledge with our expert-led IT courses.
                    Whether <br /> you're a beginner or an experienced professional,
                    we have something for <br /> everyone. Start learning today!
                </p>
                
                
                <div className="w-164 max-w-4xl h-12 px-4 bg-white rounded-md flex justify-between items-center shadow-sm">
                    <input 
                    className="text-sm sm:text-base focus:outline-none w-full h-full" 
                    type="search" 
                    placeholder="Search courses..." 
                    />
                    <i className="text-sm sm:text-base fa-solid fa-magnifying-glass text-gray-500"></i>
                </div>
                </div>
            </section>

            <section className="px-4 sm:px-5 md:px-15 lg:px-30 py-8">
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {CategoryData.map((category) => (
                    <CategoryCard 
                    key={category.id} 
                    title={category.title} 
                    icon={category.icon} 
                    />
                ))}
                </div>
            </section>
            
            <section className="px-4 sm:px-5 md:px-15 lg:px-30 py-8">
                <h2 className="text-2xl md:text-3xl text-primary-light font-bold mb-6">
                Popular Courses
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {PopularCourseData.map((course) => (
                    <PopularCourseCard 
                    key={course.id} 
                    avatar={course.avatar} 
                    title={course.title}
                    subtitle={course.subtitle} 
                    icon={course.icon} 
                    lesson={course.lesson} 
                    time={course.time} 
                    description={course.description} 
                    />
                ))}
                </div>
            </section>

            <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-8">
                <h2 className="text-2xl md:text-3xl text-primary-light font-bold mb-6">
                All Courses
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {AllCourseData.map((course) => (
                    <AllCourseCard 
                    key={course.id} 
                    avatar={course.avatar} 
                    title={course.title} 
                    subtitle={course.subtitle} 
                    icon={course.icon} 
                    />
                ))}
                </div>
            </section>
</main>
        </>
    )
}