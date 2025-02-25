const Banner = () => {
    return (
        <div className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(/src/assets/hero-bg.png)] min-h-[550px] bg-center bg-no-repeat bg-cover flex text-center flex-col justify-center items-center my-5 rounded-lg">
           <div className="sm:w-9/12 px-4 space-y-5 mx-auto">
           <div className="text-white font-bold sm:text-3xl text-lg tracking-wide sm:leading-10">
            Discover an exceptional cooking class <br /> tailored for you!
            </div>
            <p className="text-white font-medium tracking-wide">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
            </p>

            <div className="flex gap-4 items-center justify-center">
                    <button className="btn rounded-r-full rounded-l-full outline-0 border-0 font-semibold bg-green-400 px-7">Explore Now</button>
                    <button className="btn rounded-r-full rounded-l-full  border-2 font-semibold bg-transparent text-white px-7">Our Feedback</button>
            </div>
           </div>
        </div>
    );
};

export default Banner;