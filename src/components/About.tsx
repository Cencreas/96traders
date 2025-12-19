import React from "react";
import { Plane, Ship } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/The96Traders(Armazem).jpg"
              alt="Armazém - Importações e logística internacional"
              className="rounded-lg shadow-lg w-full"
            />
            {/*  
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">The 96</div>
              <div className="text-sm">Traders</div>
            </div>
            */}
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Sobre a Empresa
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              A The 96 Traders é especialista em importações diretas da China.
              Oferecemos soluções de Procurement personalizadas, processos ágeis
              de despacho aduaneiro e transporte seguro por via aérea e
              marítima, garantindo qualidade e eficiência para sua empresa.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full">
                  <Ship className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">
                    Navegando pelo Sucesso
                  </h3>
                  <p className="text-gray-600">
                    Transporte marítimo seguro e confiável, conectando
                    Moçambique aos principais portos da China.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full">
                  <Plane className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">
                    Decolagem Direta para o Mundo dos Negócios
                  </h3>
                  <p className="text-gray-600">
                    Transporte aéreo rápido e eficiente para cargas urgentes e
                    produtos de alto valor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
