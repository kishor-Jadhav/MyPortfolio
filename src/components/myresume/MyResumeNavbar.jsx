import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MyResumeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Profile", href: "#profile" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <a 
            href="#profile"
            onClick={handleClick}
            className="text-3xl font-bold text-cyan-400 cursor-pointer hover:text-cyan-300 transition ml-8"
          >
            Kishor Jadhav
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleClick}
                className="text-lg font-semibold hover:text-cyan-400 transition duration-300 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleClick}
                className="block py-2 text-lg font-semibold hover:text-cyan-400 transition duration-300 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default MyResumeNavbar;