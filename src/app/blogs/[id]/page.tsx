
import { Iarticle } from "@/components/blog/Blog";
import { supabase } from "@/lib/supabaseClient";


async function ArticleItems({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  // const result = await fetch(`http://localhost:8000/articles/${id}`);
  // const data = (await result.json()) as Iarticle;

  //  const { data, error } = await supabase
  //   .from<Iarticle>('articles')
  //   .select('*')
  //   .eq('id', id)
  //   .single();

  // if (error) {
  //   console.error('Error fetching article:', error);
  //   return <div>Error loading article.</div>;
  // }

  const { data, error } = await supabase
  .from("articles")
  .select("*")
  .eq("id", id)
  .single();

if (error) {
  console.error("Error fetching article:", error);
  return <div>Error loading article.</div>;
}

const article: Iarticle | null = data;


  return (
    <div className="bg-bg1 px-6 xl:px-[16rem]">
      <div className="pt-16  ">
        <h1 className="H2-U text-brand1 pb-8 px-2.5">
          {article?.title}
        </h1>
        <hr className="text-grey px-6" />
        <div className="flex items-center justify-center gap-6 text-white Label-U-M my-4 Label-U-M">
          <h3>Text: <span className="ml-2 Label-U-L ">Sajjad</span></h3>
          <h3>Date: <span className="ml-2 Label-U-L ">{article?.date}</span></h3>
          <h3>Read: <span className="ml-2 Label-U-L ">{article?.readTime} Min</span></h3>
        </div>
        <hr className="text-grey px-6" />
      </div>

      <div className="mt-8 flex flex-col justify-center items-center">
        <img className="w-80 h-74" src={article?.image} alt="" />
        <p className="text-white Article-U my-8">
          {article?.content}
        </p>
      </div>

      <div className="xl:pb-8">
        <p className="Label-U-L text-white bg-grey inline-block mr-6 py-1 px-2 rounded-2xl mt-6 xl:mr-6">Web Developer</p>
        <p className="Label-U-L text-white bg-grey inline-block py-1 px-2 rounded-2xl mt-6 xl:mr-6">Web Developer Job</p>
        <p className="Label-U-L text-white bg-grey inline-block py-1 px-2 rounded-2xl mt-6 xl:mr-6">Web Development</p>
      </div>

      <div className="pt-8">
        <hr className="text-grey px-6" />
        <div className="flex items-center justify-center gap-6 text-white Label-U-M my-4 Label-U-M">
          <h3>Text: <span className="ml-2 Label-U-L ">Sajjad</span></h3>
          <h3>Date: <span className="ml-2 Label-U-L ">{article?.date}</span></h3>
          <h3>Read: <span className="ml-2 Label-U-L ">{article?.readTime} Min</span></h3>
        </div>
        <hr className="text-grey px-6" />
      </div>

      <div className="mt-8 pb-16 flex justify-center">
          <button className="Button-U text-white px-8 py-4 border-2 border-brand1 rounded-4xl cursor-pointer transition-colors duration-300 hover:text-bg1 hover:bg-brand1">Subscribe My Blogs</button>
      </div>

    </div>

    
  );
}


export default ArticleItems;
