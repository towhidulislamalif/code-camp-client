import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

function Protected({ children }) {
  // use context and pass auth context
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
      </div>
    );
  }

  if (user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default Protected;
