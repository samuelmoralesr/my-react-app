import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import LoginRegister from "./components/LoginRegister";
import Productos from "./components/Productos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Devoluciones from './components/Devoluciones';
import Acerca_nosotros from './components/Acerca_nosotros';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // inicio de sesión
  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Guardar usuario en Local Storage
    localStorage.setItem("isAuthenticated", "true"); // Marcar sesión como activa
  };

  // cierre de sesión
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("user"); // Eliminar usuario del Local Storage
    localStorage.removeItem("isAuthenticated"); // Marcar sesión como inactiva
  };

  // Cargar sesión
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedAuth = localStorage.getItem("isAuthenticated") === "true";

    if (storedUser && storedAuth) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/devoluciones" element={<Devoluciones />} />
        <Route path="/acerca_de_nosotros" element={<Acerca_nosotros />} />
        <Route path="/login" element={<LoginRegister onLogin={handleLogin} />} />
        
        {/* Rutas protegidas */}
        {isAuthenticated && (
          <Route path="/productos" element={<Productos />} />
        )}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
