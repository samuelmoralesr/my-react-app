import React, { useState } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaBoxOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';  // Librería para animaciones

const Devoluciones = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (step) => {
    setExpandedStep(expandedStep === step ? null : step);
  };

  return (
    <main className="container mx-auto px-6 py-12">
      {/* Introducción */}
      <section className="intro text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Devoluciones</h1>
        <p className="text-lg text-gray-700 mb-6">
          <strong>Cambiar de opinión está bien.</strong> Gracias a nuestra
          Satisfacción garantizada, puedes devolver un producto hasta 30 días
          calendario después de la fecha en que lo recibes, según su categoría.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          ¡Sigue estos pasos para tener una devolución exitosa!
        </p>
      </section>

      {/* Pasos de Devolución */}
      <section className="steps space-y-8">
        {/* Paso 1 */}
        <motion.div
          className="step p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => toggleStep(1)}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center mb-4">
            <FaCheckCircle className="text-blue-600 w-8 h-8 mr-4" />
            <h2 className="text-2xl font-semibold text-blue-700">
              Paso 1: Crea una solicitud de devolución
            </h2>
          </div>
          {expandedStep === 1 && (
            <p className="text-gray-600">
              Ingresa a <strong>Mis compras</strong>, en <strong>Ver detalles</strong> busca
              la opción <strong>Devolver productos</strong> y crea una solicitud.
            </p>
          )}
        </motion.div>

        {/* Paso 2 */}
        <motion.div
          className="step p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => toggleStep(2)}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center mb-4">
            <FaBoxOpen className="text-yellow-500 w-8 h-8 mr-4" />
            <h2 className="text-2xl font-semibold text-blue-700">
              Paso 2: Prepara el producto
            </h2>
          </div>
          {expandedStep === 2 && (
            <p className="text-gray-600">
              Guarda el producto en su empaque original. Debes entregarlo tal y como lo
              recibiste, sin uso y con todas sus etiquetas. Si el producto es grande y fue
              vendido por Falabella u otro vendedor, recibirás una guía de devolución en
              tu correo registrado.
            </p>
          )}
        </motion.div>

        {/* Paso 3 */}
        <motion.div
          className="step p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => toggleStep(3)}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center mb-4">
            <FaExclamationTriangle className="text-red-500 w-8 h-8 mr-4" />
            <h2 className="text-2xl font-semibold text-blue-700">
              Paso 3: Realiza la entrega en un máximo de 10 días
            </h2>
          </div>
          {expandedStep === 3 && (
            <p className="text-gray-600">
              Entrega el producto en un Punto de retiro o coordina el retiro si es grande.
              Si fue vendido por Homecenter, coordina el retiro llamando al
              +57 601 123 4567.
            </p>
          )}
        </motion.div>

        {/* Paso 4 */}
        <motion.div
          className="step p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => toggleStep(4)}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center mb-4">
            <FaCheckCircle className="text-green-600 w-8 h-8 mr-4" />
            <h2 className="text-2xl font-semibold text-blue-700">
              Paso 4: Recibe tu dinero
            </h2>
          </div>
          {expandedStep === 4 && (
            <p className="text-gray-600">
              Una vez que el producto sea recibido y aprobado para devolución, recibirás
              tu reembolso.
            </p>
          )}
        </motion.div>
      </section>

      {/* Información de contacto */}
      <section className="contact-info mt-12 bg-gray-100 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-blue-700">¿Dónde puedo hacer una petición, queja o reclamo?</h3>
        <p className="text-gray-600 mt-4">
          Contáctanos de lunes a sábados de 09:00 am a 07:00 pm a través de nuestros canales de atención:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Servicio al cliente al +57 601 123 4567</li>
          <li>Whatsapp</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-700 mt-6">¿Cómo devuelvo un producto que compré en la tienda física de HogarIQ?</h3>
        <p className="text-gray-600 mt-4">
          Si compraste un producto en tienda física, tienes hasta 8 días calendario para devolver productos eléctricos, electrodomésticos, electrónicos o de tecnología, muebles, máquinas deportivas y colchones. Para otros productos, tienes hasta 30 días calendario para hacer la devolución.
        </p>
      </section>
    </main>
  );
};

export default Devoluciones;
