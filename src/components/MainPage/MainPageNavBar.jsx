import { useState } from 'react';
import { Link } from 'react-router-dom';
const MainPageNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
    const navLinks = [
      { name: "My Resume", Link: "/resume" },
      { name: "Education", href: "#home-page-education" },      
      { name: "Technologies & Expertise", href: "#home-page-technologies" },
      { name: "Professional Highlights", href: "#home-page-professional-highlights" },
      { name: "Contact", href: "#home-page-contact" },
    ];
  
    const handleClick = (e) => {
      e.preventDefault();
      const anchor = e.target.closest("a");
      if (!anchor) return;
  
      const href = anchor.getAttribute("href");
      const element = document.querySelector(href);
      if (element) {
        const offset = -150; // scroll slightly above the section
        const top = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top, behavior: "smooth" });
        setIsOpen(false);
      }
    };
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-cyan-400">
            <Link to="/">
              Kishor Jadhav
            </Link>
          </h1>

          <div className="hidden md:flex gap-8 text-slate-300">
            {navLinks.map((item) => (
               
               (item.href)? (
                 <a
                key={item.name}
                href={item.href}
                onClick={handleClick}
                 className="hover:text-cyan-400"
              >
                {item.name}
              </a>
                ) : (
                <Link key={item.name} to={item.Link} className="hover:text-cyan-400">
                  {item.name}
                </Link>
              ) 
               
            ))}
            
          </div>

        </div>
      </nav>
    </>
  )
}
export default MainPageNavBar;