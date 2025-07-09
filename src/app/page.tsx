import About from "@/components/about/About";
import Blogs from "@/components/blogs/Blogs";
import Contact from "@/components/contact/Contact";
import Header from "@/components/header/Header";
import Skills from "@/components/skills/Skills";
import Works from "@/components/works/Works";



export default function Home() {
  return (
    <div>
       <Header />
       <About />
       <Skills />
       <Works />
       <Blogs />
       <Contact />
    </div>
  );
}
