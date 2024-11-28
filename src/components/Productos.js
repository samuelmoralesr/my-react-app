import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image_url: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost/backend/get_products.php");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEditing
      ? "http://localhost/backend/update_product.php"
      : "http://localhost/backend/add_product.php";

    try {
      await axios.post(url, { ...formData, id: editId });
      Swal.fire("Éxito", isEditing ? "Producto actualizado" : "Producto agregado", "success");
      fetchProducts();
      setFormData({ name: "", price: "", description: "", image_url: "" });
      setIsEditing(false);
    } catch (error) {
      Swal.fire("Error", "Ocurrió un error", "error");
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.post("http://localhost/backend/delete_product.php", { id });
      Swal.fire("Éxito", "Producto eliminado", "success");
      fetchProducts();
    } catch (error) {
      Swal.fire("Error", "Ocurrió un error", "error");
    }
  };

  // Start editing
  const handleEdit = (product) => {
    setFormData(product);
    setEditId(product.id);
    setIsEditing(true);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Gestión de Productos</h1>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsEditing(false)}
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FaPlus /> Nuevo Producto
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded shadow-md mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre del Producto"
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Precio"
            className="border p-2 w-full rounded"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descripción"
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            placeholder="URL de la Imagen"
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
          {isEditing ? "Actualizar Producto" : "Agregar Producto"}
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow-md">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-500 font-bold">${product.price}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEdit(product)}
                className="text-yellow-500 flex items-center gap-2"
              >
                <FaEdit /> Editar
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="text-red-500 flex items-center gap-2"
              >
                <FaTrash /> Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
