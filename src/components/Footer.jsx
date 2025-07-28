import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753726592322_0.png';
  const currentYear = new Date().getFullYear();
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  const navLinks = [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#servicos', label: 'Nossa Abordagem' },
    { href: '#contato', label: 'Contato' },
  ];
  return (
    <motion.footer
      className="bg-brand-dark-gray text-brand-light-gray"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#inicio">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-14 w-auto mb-4 bg-white p-2 rounded"
              />
            </a>
            <p className="max-w-xs text-gray-400">
              Drenagem com a solidez e a confiança que seu projeto merece.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-brand-white mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-blue transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-brand-white mb-4">
              Informações de Contato
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center justify-center md:justify-start">
                <MapPin className="h-5 w-5 mr-3 text-brand-blue" />
                <span>Padre Lebret 801, G05 Bloco 03</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-5 w-5 mr-3 text-brand-blue" />
                <a
                  href="tel:+5544991040774"
                  className="hover:text-brand-blue transition-colors duration-300"
                >
                  +55 44 99104-0774
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} NTC Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}
