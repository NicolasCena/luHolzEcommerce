import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'src/redux/hooks/useAppSelector';

interface ProtectedRouteProps {
  element: JSX.Element;
  adminOnly?: boolean; 
};

export const ProtectedRoute = ({ element, adminOnly }: ProtectedRouteProps) => {
  const userState = useAppSelector((state) => state.user);

  if (!userState.isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  if (!userState.admin && userState.isAuthenticated && adminOnly) {
    return <Navigate to="/" />;
  }

  return element;
};

