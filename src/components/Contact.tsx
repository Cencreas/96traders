import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  //Linkedin (not used)
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
            Contactos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco para solicitar uma cotação ou esclarecer
            dúvidas sobre nossos serviços.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* WhatsApp Button */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Fale Conosco pelo WhatsApp
            </h3>
            <a
              href="https://wa.me/258855409716"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="mr-3"
              >
                <path d="M12.004 2.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.463 3.484 1.342 4.995l-1.426 5.217a1 1 0 0 0 1.236 1.236l5.217-1.426a9.953 9.953 0 0 0 4.995 1.342c5.523 0 9.997-4.474 9.997-9.997s-4.474-9.997-9.997-9.997zm0 18.001a7.96 7.96 0 0 1-4.073-1.13l-.291-.17-3.099.848.848-3.099-.17-.291a7.96 7.96 0 0 1-1.13-4.073c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.392-6.563c-.241-.121-1.428-.705-1.648-.785-.221-.08-.382-.121-.543.121-.161.241-.623.785-.763.947-.141.161-.281.181-.523.06-.241-.121-1.018-.375-1.94-1.193-.717-.639-1.203-1.428-1.344-1.669-.141-.241-.015-.372.106-.493.109-.108.241-.281.362-.422.121-.141.161-.241.241-.402.08-.161.04-.302-.02-.422-.06-.121-.543-1.312-.744-1.797-.196-.471-.396-.406-.543-.414l-.462-.008c-.161 0-.422.06-.643.302-.221.241-.843.824-.843 2.008s.863 2.331.983 2.493c.121.161 1.697 2.594 4.119 3.531.576.198 1.025.316 1.376.405.577.146 1.102.125 1.518.076.463-.056 1.428-.583 1.631-1.146.201-.563.201-1.045.141-1.146-.06-.101-.22-.161-.461-.282z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Informações de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Telefones</p>
                    <p className="text-gray-600">+258 85 540 9716</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contacto@96traders.co.mz</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Localização</p>
                      <p className="text-gray-600">
                        Moçambique, Maputo Av. Amílcar Cabral nº 873
                      </p>
                    </div>
                  </div>

                  {/* Mapa incorporado */}
                  <div className="w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1143.9624991098933!2d32.58326707759943!3d-25.965806082003624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69ba98c7a6133%3A0x6cdc297686dfb303!2s873%20Av.%20Amilcar%20Cabral%2C%20Maputo!5e0!3m2!1spt-PT!2smz!4v1765549434908!5m2!1spt-PT!2smz"
                      width="100%"
                      height={250}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                      title="Localização da 96 Traders"
                    />
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-primary mb-4">Siga-nos</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61585495555680"
                    className="bg-primary bg-opacity-10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/the96traders?igsh=MXNibDFhYmVjM2oxdQ=="
                    className="bg-primary bg-opacity-10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  {/* LinkedIn 
                  <a
                    href="#"
                    className="bg-primary bg-opacity-10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  */}
                </div>
              </div>
            </div>

            {/*ea Google Maps 
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230994.99842855652!2d32.32065654999999!3d-25.891968449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69b8b6b3a9d5d%3A0x4b9b6b3a9d5d9b8!2sMaputo%2C%20Mozambique!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Localização da 96 Traders"
              ></iframe>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
