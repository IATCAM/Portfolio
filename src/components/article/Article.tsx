import { Iarticle } from "../blog/Blog";



function Article({title , decription , date , readTime}: Iarticle) {
  return (
    <div>
      <div className="mx-12 xl:mx-32 xl:grid xl:grid-cols-6 pt-16">
        <div className="col-span-2 ">
          <img
            className="w-30 h-30 mx-auto xl:mx-0 xl:w-60 xl:h-60 xl:ml-10"
            src="https://umpxyqynyvkgcsphpthq.supabase.co/storage/v1/object/public/articles-image//blogsImg.jpg"
            alt=""
          />
        </div>

        <div className="xl:col-span-4 xl:mr-10">
          <h1 className="H2-U text-brand1 mt-8">
            {title}
          </h1>
          <p className="Para-U my-6 text-white">
           {decription}
          </p>
          <p className="Para-U text-brand1 cursor-pointer transition-transform duration-300 hover:scale-99">
            Read More &#10095;&#10095;{" "}
          </p>
          <hr className="w-[4.87rem] mt-1 text-white" />
          <div className="xl:flex xl:items-center ">
            <p className="Label-U-L text-white bg-grey inline-block py-1 px-2 rounded-2xl mt-5 xl:mr-6">
              Web Developer
            </p>

            <div className="flex items-center gap-2 xl:gap-6 text-white Label-U-M mt-4">
              <h3>
                Text: <span className="Label-U-L ml-2">Sajjad</span>
              </h3>
              <h3>
                Date: <span className="Label-U-L ml-2">{date}</span>
              </h3>
              <h3>
                Read: <span className="Label-U-L ml-2">{readTime} Min</span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-auto h-[0.0625rem] text-white mx-6 xl:mx-32 mt-8 xl:mt-16 " />
    </div>
  );
}

export default Article;
