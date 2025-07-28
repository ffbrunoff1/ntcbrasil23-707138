import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-brand-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-gray">
            Vamos Construir Juntos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tem um projeto em mente? Entre em contato conosco. Estamos prontos
            para transformar sua visão em um empreendimento de sucesso.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome completo"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-brand-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-shadow duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Seu melhor e-mail"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-brand-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-shadow duration-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Conte-nos sobre seu projeto..."
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-brand-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-shadow duration-200"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-brand-blue text-brand-white font-bold rounded-lg shadow-intense hover:bg-brand-dark-blue disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <Loader className="animate-spin mr-3" />
                ) : (
                  <Send className="mr-3" />
                )}
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </div>
          </form>

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-100 text-green-800 border-l-4 border-green-500 rounded-r-lg flex items-center"
            >
              <CheckCircle className="mr-3" />
              Sua mensagem foi enviada com sucesso! Entraremos em contato em
              breve.
            </motion.div>
          )}
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-100 text-red-800 border-l-4 border-red-500 rounded-r-lg flex items-center"
            >
              <AlertTriangle className="mr-3" />
              Erro: {submitError} Por favor, tente novamente.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
