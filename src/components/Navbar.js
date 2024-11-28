import { useState } from 'react';
import { FaHome, FaBoxOpen, FaUndo, FaTimes, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Navbar({ isAuthenticated, user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Controlar la apertura y cierre del menú
  const toggleMenu = () => setIsOpen(!isOpen);

  // Manejar el cierre de sesión con confirmación
  const handleLogout = () => {
    Swal.fire({
      title: 'Cerrar Sesión',
      text: '¿Estás seguro de que deseas cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        onLogout(); // Llama a la función que cierra la sesión
        navigate('/'); // Redirige al usuario a la página de inicio
      }
    });
  };

  return (
    <header className="bg-[#00274D] text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img src="/logo1.png" alt="HogarIQ Logo" className="h-10 w-110" />
          </div>
        </Link>
        <button className="lg:hidden text-white focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
        <nav className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-6`}>
          <Link to="/" className="block text-xl hover:text-blue-300 flex items-center">
            <FaHome className="mr-1" /> Inicio
          </Link>
          <Link to="/Devoluciones" className="block text-xl hover:text-blue-300 flex items-center">
            <FaUndo className="mr-1" /> Devoluciones
          </Link>
          <Link to="/acerca_de_nosotros" className="block text-xl hover:text-blue-300 flex items-center">
            Acerca de Nosotros
          </Link>
          {!isAuthenticated ? (
            <Link to="/login" className="bg-yellow-500 text-white py-2 px-4 rounded-lg md:font-bold">
              Acceso
            </Link>
          ) : (
            <>
              <Link to="/Productos" className="block text-xl hover:text-blue-300 flex items-center">
                <FaBoxOpen className="mr-1" /> Productos
              </Link>
              <span className="block text-xl text-white">{user?.name}</span> {/* Aquí mostramos el nombre */}
              <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded-lg">
                Cerrar sesión
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
