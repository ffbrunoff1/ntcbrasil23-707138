import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="max-w-3xl text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-brand-dark-gray leading-tight mb-4"
            variants={itemVariants}
          >
            Construindo o Futuro com{' '}
            <span className="gradient-text">Qualidade e Confiança</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
            variants={itemVariants}
          >
            Transformamos visões em realidade com excelência em cada etapa do
            processo. Na NTC Brasil, seu projeto está em mãos seguras.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-brand-white font-bold rounded-lg shadow-intense hover:bg-brand-dark-blue transition-all duration-300 transform hover:scale-105"
            >
              Dê o Primeiro Passo para o Seu Projeto
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-full bg-brand-blue/10 rounded-tl-full"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      />
    </section>
  );
}
