import api from "./api";

export const registerUser = async (name, email, password) => {
  try {
    const response = await api.post("register.php", {
      name,
      email,
      password,
    });
    return response.data; // Respuesta desde PHP
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error al registrar usuario");
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post("login.php", {
      email,
      password,
    });
    return response.data; // Respuesta desde PHP
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error al iniciar sesión");
  }
};

export const resetPassword = async (email) => {
  try {
    const response = await api.post("reset_password.php", {
      email,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error al recuperar contraseña");
  }
};
