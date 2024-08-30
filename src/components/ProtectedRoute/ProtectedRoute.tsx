import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';  // Suponiendo que tienes un hook que maneja la autenticación

interface ProtectedRouteProps {
  element: JSX.Element;
  adminOnly?: boolean;  // Para proteger rutas solo para administradores, si es necesario
}

const ProtectedRoute = ({ element, adminOnly }: ProtectedRouteProps) => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
