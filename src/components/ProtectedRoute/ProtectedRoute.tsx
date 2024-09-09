import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  element: JSX.Element;
  condition: boolean; 
};

export const ProtectedRoute = ({ element, condition }: ProtectedRouteProps) => {

  if (condition) {
    return <Navigate to="/" />;
  }

  return element;
};

