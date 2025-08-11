
import Blog from "@/components/blog/Blog";


function Blogs() {
  return (
    <div className="bg-bg1">
      <hr className="w-auto h-[0.0625rem] text-grey mx-6 xl:mx-32 xl:mb-16" />
      <div className="pt-16">
         <div className="flex flex-col justify-center items-center">
            <h1 className="H1-UU text-brand1">Blogs</h1>
            <span className="my-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="174" height="12" viewBox="0 0 174 12" fill="none">
                <path d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM162.667 6C162.667 8.94552 165.054 11.3333 168 11.3333C170.946 11.3333 173.333 8.94552 173.333 6C173.333 3.05448 170.946 0.666667 168 0.666667C165.054 0.666667 162.667 3.05448 162.667 6ZM6 6V7H168V6V5H6V6Z" fill="#12F7D6"/>
              </svg>
            </span>
        </div>

        <div className="flex flex-col justify-center items-center mx-6">
            <p className="Para-M text-white text-center IBM">
                My thoughts on technology and business, welcome to subscribe
            </p>
        </div>

        <div className="my-16 flex justify-center">
          <button className="Button-U text-white px-8 py-4 border-2 border-brand1 rounded-4xl cursor-pointer transition-color duration-300 hover:bg-brand1 hover:text-bg1">Subscribe My Blogs</button>
        </div>

        <hr className="text-white mx-6 xl:mx-32" />
      </div>

      <div className="pb-16 xl:pb-32">


        <Blog />

      </div>
    </div>
  )
}


export default Blogs;
