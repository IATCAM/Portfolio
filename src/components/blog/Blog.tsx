"use client";

import { useEffect, useState } from "react";
import Article from "../article/Article";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";


export interface Iarticle {
  id: number | string;
  title: string;
  decription: string;
  image: string;
  content: string
}

// export interface IarticleProps{
//   params: Promise<{id: number | string}>;
//   searchParams: Promise<{}>
// }

export interface IarticleProps {
  params: { id: number | string };
  searchParams?: { [key: string]: string | string[] };
}


function Blog() {

  const [article, setArticle] = useState<Iarticle[]>([]);

  // useEffect(() => {
  //   axios.get(`http://localhost:8000/articles`).then((result) => {
  //     const data = result.data;
  //     setArticle(data);
  //   });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*");

      if (error) {
        console.error("Error fetching articles:", error.message);
        return;
      }

      setArticle(data || []);
    };

    fetchData();
  }, []);


  return (
    <div>
      {
        article.map((item)=>(          
              <Link key={item.id} href={`/blogs/${item.id}`}>
                <Article {...item} />
              </Link>
        ))
      }
    </div>
  );
}


export default Blog;
