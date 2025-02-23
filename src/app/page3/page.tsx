'use client'

import Image from "next/image";
import { useState } from "react";
import Rectangle from "../components/Rectangle";

export default function page3() {
  // Estado para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  // Estado para los errores de validación
  const [errors, setErrors] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  // Estado para usuario registrado
  const [registeredUser, setRegisteredUser] = useState('');

  // Función para validar email con regex
const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

  // Manejar cambios en los inputs
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
    
    // Limpiar error cuando el usuario empieza a escribir
    setErrors(prev => ({
        ...prev,
        [name]: ''
    }));
};

  // Manejar envío del formulario
interface FormData {
    nombre: string;
    email: string;
    password: string;
}

interface Errors {
    nombre: string;
    email: string;
    password: string;
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors: Errors = {
        nombre: '',
        email: '',
        password: ''
    };
    let isValid = true;

    // Validar nombre
    if (!formData.nombre.trim()) {
        newErrors.nombre = 'El nombre es requerido';
        isValid = false;
    }

    // Validar email
    if (!formData.email.trim()) {
        newErrors.email = 'El email es requerido';
        isValid = false;
    } else if (!isValidEmail(formData.email)) {
        newErrors.email = 'Por favor ingresa un email válido';
        isValid = false;
    }

    // Validar contraseña
    if (!formData.password.trim()) {
        newErrors.password = 'La contraseña es requerida';
        isValid = false;
    }

    setErrors(newErrors);

    // Si todo es válido, procesar el registro
    if (isValid) {
        setRegisteredUser(formData.nombre);
        //Guardamos la información
        console.log('Registro exitoso:', formData);
    }
};

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Usuario registrado */}
      {registeredUser && (
        <div className="absolute top-4 right-4 bg-green-100 p-2 rounded">
          Bienvenido, {registeredUser}
        </div>
      )}

      {/* Formu */}
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Botón Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}