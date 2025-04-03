export function AllCourses() {
    return (
        <body className="bg-white ">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
            <main className="w-full">
                <section className="w-full bg-gray-200 h-[300px] flex flex-col items-center justify-center">
                    <div className="text-center flex flex-col items-center gap-y-4">
                        <h1 className="text-primary-light text-2xl md:text-4xl lg:text-4xl"><b>Discover Your Next<br/>Learning Adventure</b></h1>
                        <div className="hidden">
                            <h3 className="text-primary-light md:text-md lg:text:md">Unlock a world of knowledge with our expert-led IT courses.
                            Whether <br/> you're a beginner or an experienced professional,
                            we have something for<br/>everyone. Start learning today!
                            </h3>
                        </div>
                        <div className="md:hidden lg:hidden">
                            <h3 className="text-primary-light text-xs">Unlock a world of knowledge with our expert-led IT courses.
                            <br/>Whether you're a beginner or an experienced professional,
                                we have <br/> something for everyone. Start learning today!
                            </h3>
                        </div>
                        <div className="text-gray-500 w-68 md:w-120 lg:w-120 bg-white p-2 rounded-md flex justify-between items-center">
                            <input className="text-xs md:text-md" type="search" name="search" id="search" placeholder="Search" />
                            <i class="text-xs md:text-md fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </section>
                <section>
                    
                </section>
            </main>
        </body>
    )
}