import React from 'react';
import SectionTransition from '../components/shared/SectionTransition';
import Contact from '../components/home/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary-50 dark:bg-gray-900 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTransition>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              ¿Tienes algún proyecto interesante en mente? ¿Quieres colaborar?
              No dudes en contactarme.
            </p>
          </SectionTransition>
        </div>
      </div>

      {/* Contact Form Section */}
      <SectionTransition>
        <Contact />
      </SectionTransition>
    </div>
  );
};

export default ContactPage;