import React from "react";
import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <img
                src="/LOGO4.2.png"
                alt="Logo Footer"
                className="h-14 w-auto rounded-lg  p-2 mr-1"
              />
              <div className="text-2xl font-bold font-playfair">
                The 96 <span className="text-white">Traders</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas em importações diretas da China para Moçambique.
              Conectamos sua empresa aos melhores fornecedores com qualidade e
              eficiência.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary bg-opacity-10 p-3 rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-primary bg-opacity-10 p-3 rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-primary bg-opacity-10 p-3 rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="font-bold ">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contactos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactos</h3>
            <ul className="space-y-2 text-gray-300 font-bold">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+258 85 540 9716</span>
              </li>

              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contacto@96traders.co.mz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2026 The 96 Traders. Todos os direitos reservados.
          </p>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">
            Desenvolvido pela{"  "}
            <span className="text-white font-bold">96 Tech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
