import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, HardHat, ShieldCheck, Target } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ClipboardList className="h-10 w-10 text-brand-blue" />,
      title: 'Planejamento Estratégico',
      description:
        'Analisamos cada detalhe do seu projeto para criar um plano de execução otimizado, garantindo prazos e orçamentos precisos.',
    },
    {
      icon: <HardHat className="h-10 w-10 text-brand-blue" />,
      title: 'Execução de Precisão',
      description:
        'Com mão de obra qualificada e gerenciamento rigoroso, executamos cada fase da construção com máxima eficiência e segurança.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-brand-blue" />,
      title: 'Qualidade Garantida',
      description:
        'Implementamos um sistema de controle de qualidade contínuo, assegurando que todos os materiais e processos atendam aos mais altos padrões.',
    },
    {
      icon: <Target className="h-10 w-10 text-brand-blue" />,
      title: 'Foco no Cliente',
      description:
        'Mantemos uma comunicação transparente e colaborativa, garantindo que o resultado final seja exatamente o que você idealizou.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-gray">
            Nossa Abordagem de Trabalho
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Construir é mais do que erguer paredes. É um processo integrado que
            vai do conceito à entrega, focado em 4 pilares fundamentais.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-brand-light-gray p-8 rounded-xl shadow-soft hover:shadow-intense hover:-translate-y-2 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="mb-6 bg-brand-white p-4 rounded-full self-start">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark-gray mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
