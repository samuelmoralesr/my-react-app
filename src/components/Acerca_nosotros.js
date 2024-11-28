import React, { useState } from "react";

const Acerca_nosotros = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setFormSubmitted(true);
    // Aquí podrías enviar la información a tu backend o base de datos
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row w-full max-w-5xl">
        {/* Sección de Información */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Acerca de Nosotros</h1>
          <p className="text-gray-700 text-lg mb-6">
            Somos una empresa dedicada a la venta de equipos tecnológicos de primera
            clase. Nos especializamos en productos por encargo, asegurando que obtengas
            exactamente lo que necesitas con la mejor calidad.
          </p>
          <p className="text-gray-700 text-lg">
            Si deseas más información, no dudes en contactarnos o déjanos tu información y
            te llamaremos.
          </p>
        </div>

        {/* Sección del Formulario */}
        <div className="md:w-1/2 bg-gray-50 p-8">
          {formSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
              ¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-gray-800">
                ¿Quieres más información?
              </h2>
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ingresa tu correo"
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ingresa tu teléfono"
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
              >
                Enviar información
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Acerca_nosotros;
