import React from 'react';
import { Search, FileText, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search size={48} />,
      title: 'Procurement',
      description: 'Conexão com fornecedores chineses de qualidade, atendendo às necessidades específicas de cada cliente com soluções personalizadas.'
    },
    {
      icon: <FileText size={48} />,
      title: 'Despacho Aduaneiro',
      description: 'Processos rápidos, transparentes e sem complicações para liberar seus produtos, garantindo agilidade na liberação.'
    },
    {
      icon: <Truck size={48} />,
      title: 'Transporte de Cargas',
      description: 'Logística confiável, com entregas seguras e pontuais da China para Moçambique, por via aérea e marítima.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em comércio internacional, desde a identificação de fornecedores até a entrega final dos produtos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-8 rounded-lg text-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="inline-block mb-6 text-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;