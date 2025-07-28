import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, CheckCircle } from 'lucide-react';

export default function About() {
  const imageURL =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-site.jpg';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: 'beforeChildren' },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Building className="h-8 w-8 text-brand-blue" />,
      title: 'Inovação em Construção',
      description:
        'Utilizamos as mais recentes tecnologias e métodos para garantir eficiência e modernidade em cada projeto.',
    },
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: 'Equipe Especializada',
      description:
        'Nossa equipe é formada por profissionais altamente qualificados e dedicados a entregar resultados excepcionais.',
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-brand-blue" />,
      title: 'Compromisso com a Qualidade',
      description:
        'A excelência é o nosso padrão. Seguimos rigorosos controles de qualidade para superar as expectativas.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-gray mb-4">
              Transformando Visões em{' '}
              <span className="gradient-text">Realidade</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              A NTC Brasil nasceu do desejo de inovar no setor da construção,
              combinando técnica, paixão e um compromisso inabalável com a
              satisfação do cliente. Cada estrutura que erguemos é um testemunho
              da nossa dedicação à qualidade, segurança e sustentabilidade.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-brand-blue/10 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark-gray">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative h-96 md:h-full w-full rounded-xl overflow-hidden shadow-soft"
            variants={itemVariants}
          >
            <img
              src={imageURL}
              alt="Equipe de construção em um canteiro de obras"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-blue/30 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
