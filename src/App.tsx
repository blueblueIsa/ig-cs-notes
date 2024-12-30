import React from 'react';
// import { RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppRoutes } from './routes';

export function App() {
  return (
    // <AuthProvider>
    //   <ThemeProvider>
    //     <AppRoutes />
    //   </ThemeProvider>
    // </AuthProvider>
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}