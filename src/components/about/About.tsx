

function About() {

  const background = "https://umpxyqynyvkgcsphpthq.supabase.co/storage/v1/object/public/articles-image//bg1.png";

  return (
    <div className="relative" id="AboutMe">
      <div className="absolute inset-0 bg-bg1 bg-[50%] bg-cover bg-no-repeat filter brightness-20" style={{ backgroundImage: `url(${background})`}}></div>
      <div className="relative z-10 mx-6 xl:mx-32 pt-16">
        <div className="hidden xl:flex justify-center flex-col items-center py-32">
          <span className="mb-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="44" viewBox="0 0 32 44" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V28C32 36.8366 24.8366 44 16 44H14V43.8762C6.10738 42.892 0 36.1592 0 28V16ZM16 40C22.6274 40 28 34.6274 28 28V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V28C4 34.6274 9.37258 40 16 40Z" fill="#12F7D6"/>
            </svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="87" viewBox="0 0 12 87" fill="none">
              <path d="M6.5 1C6.5 0.723858 6.27614 0.5 6 0.5C5.72386 0.5 5.5 0.723858 5.5 1L6.5 1ZM6 83.8867L8.88675 81L6 78.1132L3.11325 81L6 83.8867ZM5.5 3.85714C5.5 4.13329 5.72386 4.35714 6 4.35714C6.27614 4.35714 6.5 4.13329 6.5 3.85714H5.5ZM6.5 9.57143C6.5 9.29528 6.27614 9.07143 6 9.07143C5.72386 9.07143 5.5 9.29528 5.5 9.57143H6.5ZM5.5 15.2857C5.5 15.5619 5.72386 15.7857 6 15.7857C6.27614 15.7857 6.5 15.5619 6.5 15.2857H5.5ZM6.5 21C6.5 20.7239 6.27614 20.5 6 20.5C5.72386 20.5 5.5 20.7239 5.5 21H6.5ZM5.5 26.7143C5.5 26.9904 5.72386 27.2143 6 27.2143C6.27614 27.2143 6.5 26.9904 6.5 26.7143H5.5ZM6.5 32.4286C6.5 32.1524 6.27614 31.9286 6 31.9286C5.72386 31.9286 5.5 32.1524 5.5 32.4286H6.5ZM5.5 38.1429C5.5 38.419 5.72386 38.6429 6 38.6429C6.27614 38.6429 6.5 38.419 6.5 38.1429H5.5ZM6.5 43.8571C6.5 43.581 6.27614 43.3571 6 43.3571C5.72386 43.3571 5.5 43.581 5.5 43.8571H6.5ZM5.5 49.5714C5.5 49.8476 5.72386 50.0714 6 50.0714C6.27614 50.0714 6.5 49.8476 6.5 49.5714H5.5ZM6.5 55.2857C6.5 55.0096 6.27614 54.7857 6 54.7857C5.72386 54.7857 5.5 55.0096 5.5 55.2857H6.5ZM5.5 61C5.5 61.2761 5.72386 61.5 6 61.5C6.27614 61.5 6.5 61.2761 6.5 61H5.5ZM6.5 66.7143C6.5 66.4381 6.27614 66.2143 6 66.2143C5.72386 66.2143 5.5 66.4381 5.5 66.7143H6.5ZM5.5 72.4286C5.5 72.7047 5.72386 72.9286 6 72.9286C6.27614 72.9286 6.5 72.7047 6.5 72.4286H5.5ZM6.5 78.1429C6.5 77.8667 6.27614 77.6429 6 77.6429C5.72386 77.6429 5.5 77.8667 5.5 78.1429H6.5ZM5.5 1V3.85714H6.5V1L5.5 1ZM5.5 9.57143L5.5 15.2857H6.5L6.5 9.57143H5.5ZM5.5 21L5.5 26.7143H6.5L6.5 21H5.5ZM5.5 32.4286V38.1429H6.5V32.4286H5.5ZM5.5 43.8571L5.5 49.5714H6.5L6.5 43.8571H5.5ZM5.5 55.2857L5.5 61H6.5L6.5 55.2857H5.5ZM5.5 66.7143V72.4286H6.5V66.7143H5.5ZM5.5 78.1429L5.5 81H6.5L6.5 78.1429H5.5ZM7 1C7 0.447715 6.55228 5.96046e-08 6 5.96046e-08C5.44772 5.96046e-08 5 0.447715 5 1L7 1ZM6 86.7735L11.7735 81L6 75.2265L0.226498 81L6 86.7735ZM5 3.85714C5 4.40943 5.44772 4.85714 6 4.85714C6.55228 4.85714 7 4.40943 7 3.85714H5ZM7 9.57143C7 9.01914 6.55228 8.57143 6 8.57143C5.44772 8.57143 5 9.01914 5 9.57143H7ZM5 15.2857C5 15.838 5.44772 16.2857 6 16.2857C6.55228 16.2857 7 15.838 7 15.2857H5ZM7 21C7 20.4477 6.55228 20 6 20C5.44772 20 5 20.4477 5 21H7ZM5 26.7143C5 27.2666 5.44772 27.7143 6 27.7143C6.55228 27.7143 7 27.2666 7 26.7143H5ZM7 32.4286C7 31.8763 6.55228 31.4286 6 31.4286C5.44772 31.4286 5 31.8763 5 32.4286H7ZM5 38.1429C5 38.6951 5.44772 39.1429 6 39.1429C6.55228 39.1429 7 38.6951 7 38.1429H5ZM7 43.8571C7 43.3049 6.55228 42.8571 6 42.8571C5.44772 42.8571 5 43.3049 5 43.8571H7ZM5 49.5714C5 50.1237 5.44772 50.5714 6 50.5714C6.55228 50.5714 7 50.1237 7 49.5714H5ZM7 55.2857C7 54.7334 6.55228 54.2857 6 54.2857C5.44772 54.2857 5 54.7334 5 55.2857H7ZM5 61C5 61.5523 5.44772 62 6 62C6.55228 62 7 61.5523 7 61H5ZM7 66.7143C7 66.162 6.55228 65.7143 6 65.7143C5.44772 65.7143 5 66.162 5 66.7143H7ZM5 72.4286C5 72.9809 5.44772 73.4286 6 73.4286C6.55228 73.4286 7 72.9809 7 72.4286H5ZM7 78.1429C7 77.5906 6.55228 77.1429 6 77.1429C5.44772 77.1429 5 77.5906 5 78.1429H7ZM5 1V3.85714H7V1L5 1ZM5 9.57143L5 15.2857H7L7 9.57143H5ZM5 21L5 26.7143H7L7 21H5ZM5 32.4286L5 38.1429H7L7 32.4286H5ZM5 43.8571L5 49.5714H7L7 43.8571H5ZM5 55.2857L5 61H7L7 55.2857H5ZM5 66.7143V72.4286H7V66.7143H5ZM5 78.1429L5 81H7L7 78.1429H5Z" fill="white"/>
            </svg>
          </span>
        </div>
        
        <div className="mx-auto w-56 h-[4.25rem] xl:w-[22.93rem] xl:h-26 about-radius border-brand1 border-4 xl:my-16 xl:ml-50">
          <h1 className="py-4 xl:pt-7 px-9 H2-U H1-U text-white  text-center">About Me</h1>
        </div>

        <div className="w-[21.5rem] h-[41.06rem] xl:w-[55rem] xl:h-[21rem] bg-bg1 rounded-[2.5rem] mx-auto mt-8 p-6 xl:py-4 xl:px-10 IBM">
          <span className="Code-M text-brand2">&lt;p&gt;</span>
          <h1 className="my-4 leading-[1.25rem]">
            <p className="Logo-MM text-brand1 pb-4 xl:pb-0">Hello!</p>
            <p className="Para-M  text-white">
              My name is Sajjad and I specialize in web developement that utilizes <span className="text-brand1">NEXT</span>, <span className="text-brand1">REACT</span>, <span className="text-brand1">JavaScript</span>, and <span className="text-brand1">TypeScript</span> etc.
            </p>
            <p className="Para-M  text-white py-3 xl:py-0">
              I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
            </p>
            <p className="Para-M  text-white pb-3 xl:pb-0">
              When Im not coding, I dedicate my time to researching emerging <span className="text-brand1">technologies</span> and watching programming-related videos to stay informed and continuously improve my <span className="text-brand1">skills</span>.
            </p>
            <p className="Para-M  text-white">
              I like to have my perspective and belief systems challenged so that I see the world through new eyes.
            </p>
          </h1>
          <span className="Code-M text-brand2">&lt;/p&gt;</span>
        </div>

        <div className="py-16 xl:py-32">
          <img className="w-[17rem] h-[22.75rem] xl:w-[28.87rem] xl:h-[34.75rem] mx-auto rounded-2xl" src="https://umpxyqynyvkgcsphpthq.supabase.co/storage/v1/object/public/articles-image//aboutPic.jpg" alt="" />
        </div>

      </div>
    </div>
  )
}


export default About;



