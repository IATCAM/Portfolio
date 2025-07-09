import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

interface Ilayout{
    children: React.ReactNode
}


function Layout({children}: Ilayout) {
  return (
    <div>
        <Navbar />
        {children}
        <Sidebar />
        <Footer />
    </div>
  )
}


export default Layout;
