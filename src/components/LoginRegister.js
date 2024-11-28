import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const LoginRegister = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? "http://localhost/backend/login.php"
      : "http://localhost/backend/register.php";
  
    try {
      const response = await axios.post(url, formData);
      if (response.status === 200 && !response.data.error) { 
        Swal.fire("Éxito", response.data.message, "success");
        if (isLogin) {
          // Al iniciar sesión, pasamos los datos del usuario a la app
          onLogin(response.data.user); // Asegúrate de que la respuesta tenga los datos de usuario
          window.location.href = "/"; // Redirigimos al inicio
        }
      } else {
        Swal.fire("Error", response.data.error || "Ocurrió un error", "error");
      }
    } catch (error) {
      if (error.response) {
        Swal.fire("Error", error.response.data.error || "Ocurrió un error", "error");
      } else {
        Swal.fire("Error", "No se pudo conectar con el servidor", "error");
      }
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>
        {!isLogin && (
          <div className="mb-4">
            <label className="block mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-1">Correo</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button className="bg-blue-500 text-white w-full py-2 rounded">
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </button>
        <p className="mt-4 text-center">
          {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes cuenta?"}{" "}
          <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-blue-500">
            {isLogin ? "Regístrate" : "Inicia Sesión"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginRegister;
