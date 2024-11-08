import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dash';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    setIsAuthenticated(loggedIn === 'true');
  }, []); // On initial mount, check if the user is logged in

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsAuthenticated(false);  // Update state to reflect logged out
  };

  return (
    <Routes>
      {/* Login Route */}
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/dash" /> : <Login />}
      />
      
      {/* Sign Up Route */}
      <Route
        path="/signup"
        element={isAuthenticated ? <Navigate to="/dash" /> : <SignUp />}
      />
      
      {/* Dashboard Route */}
      <Route
        path="/dash"
        element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />}
      />
      
      {/* Catch-all for any other routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
