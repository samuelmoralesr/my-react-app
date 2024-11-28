import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaLeaf } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#00274D] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/">
            <div className="flex items-center space-x-2 mb-4">
            <img src="/logo1.png" alt="HogarIQ Logo" className="h-10 w-110" />
            </div>
          </Link>
          <p className="text-gray-300">Donde Innovación y Hogar se Encuentran.</p>
          <p className="mt-4 text-gray-400">© {new Date().getFullYear()} HogarIQ. Todos los derechos reservados.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
          <nav className="space-y-2">
              <Link to="/" className="block text-xl hover:blue-green-300">Inicio</Link>
              <Link to="/Acerca_de_nosotros" className="block text-xl hover:text-blue-300">Acerca de nosotros</Link>
              <Link to="/Devoluciones" className="block text-xl hover:text-blue-300">Devoluciones</Link>
          </nav>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
          <p>Email: info@HogarIQ.com</p>
          <p>Teléfono: +57 123 456 7890</p>
          <p>Dirección: Calle 123, Barranquilla, Colombia</p>

          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-green-300">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-300">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-300">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-300">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
