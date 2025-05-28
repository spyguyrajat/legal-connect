import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

// Test credentials
const TEST_USERS = {
  'test@example.com': {
    password: 'test123',
    name: 'Test User',
    userType: 'client'
  },
  'lawyer@example.com': {
    password: 'lawyer123',
    name: 'John Doe',
    userType: 'lawyer'
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Check if user exists and password matches
    if (TEST_USERS[email] && TEST_USERS[email].password === password) {
      const userData = {
        email,
        ...TEST_USERS[email]
      };
      setUser(userData);
      return userData;
    }
    throw new Error('Invalid email or password');
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 