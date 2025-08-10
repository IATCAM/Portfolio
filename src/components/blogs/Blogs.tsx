"use client"

import Link from "next/link";
import NavigationBar from "../navigationBar/NavigationBar";


function Blogs() {

    const handleSubscribe = ()=>{
        alert("Thanks for subscribe")
    }
    
  return (
    <div className="bg-bg1" id="Blogs">
      <NavigationBar title="Blogs" description="My thoughts on technology and business, welcome to subscribe" icon={<svg xmlns="http://www.w3.org/2000/svg" width="174" height="12" viewBox="0 0 174 12" fill="none">
                <path d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM162.667 6C162.667 8.94552 165.054 11.3333 168 11.3333C170.946 11.3333 173.333 8.94552 173.333 6C173.333 3.05448 170.946 0.666667 168 0.666667C165.054 0.666667 162.667 3.05448 162.667 6ZM6 6V7H168V6V5H6V6Z" fill="#12F7D6"/>
            </svg>} />

             <hr className="w-auto h-[0.0625rem] text-white mx-4 xl:mx-28 xl:mb-16 mt-25 xl:mt-[12rem] " />

             <div className="mx-12 xl:mx-36 xl:flex xl:items-center xl:gap-16">
                <div>
                    <img className="w-30 h-30 mx-auto mt-8 xl:w-75 xl:h-60 " src="https://umpxyqynyvkgcsphpthq.supabase.co/storage/v1/object/public/articles-image//blogsImg.jpg" alt="" />
                </div>

                <div className="xl:flex xl:flex-col">
                    <h1 className="H2-U text-brand1 mt-8">
                        What does it take to become a web developer?
                    </h1>
                    <p className="Para-U my-6 text-white">
                        Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…
                    </p>
                    <p className="Para-U text-brand1 cursor-pointer">Read More  &#10095;&#10095; </p>
                    <hr className="w-[4.87rem] mt-1 text-white" />
                    <div className="xl:flex xl:items-center ">
                        <p className="Label-U-L text-white bg-grey inline-block py-1 px-2 rounded-2xl mt-6 xl:mr-6">Web Developer</p>

                        <div className="flex items-center gap-2 xl:gap-6 text-white Label-U-M mt-4">
                            <h3>Text: Sajjad</h3>
                            <h3>Date: 8.June 2025</h3>
                            <h3>Read: 1 Min</h3>
                        </div>
                    </div>
                </div>
             </div>

             <hr className="w-auto h-[0.0625rem] text-white mx-4 xl:mx-28 mb-16 mt-8 xl:mt-16" />

             <div className="flex gap-8 items-center justify-center pb-16 xl:mt-16 xl:pb-[6.25rem]">
                <button className="py-4 px-8 bg-brand1 cursor-pointer border-2 border-brand1 rounded-4xl Button-U text-bg1 transition-color duration-300 hover:bg-bg1 hover:text-white hover:border-2 hover:border-brand1">
                    <Link href="/blogs/1">View More</Link>
                </button>
                <button className="py-4 px-8 rounded-4xl border-2 border-brand1 text-white Button-U cursor-pointer transition-color duration-300 hover:bg-brand1 hover:text-bg1" onClick={handleSubscribe}>Subscribe</button>
             </div>
    </div>
  )
}


export default Blogs;
