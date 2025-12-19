import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/LOGO4.1.png"
            alt="Logo"
            className={`h-10 w-auto mr-2 transition-all ${
              isScrolled ? "" : ""
            }`}
          />
          <div
            className={`text-2xl font-bold font-playfair transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            The 96{" "}
            <span
              className={`text-2xl font-bold font-playfair transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Traders
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-bold">
          <button
            onClick={() => scrollToSection("home")}
            className={`hover:text-primary transition-colors ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`hover:text-primary transition-colors ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={`hover:text-primary transition-colors ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`hover:text-primary transition-colors ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Contactos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Cotação
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-primary" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-800 hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-800 hover:text-primary transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-800 hover:text-primary transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-800 hover:text-primary transition-colors text-left"
              >
                Contactos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 w-fit"
              >
                Solicitar Cotação
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
