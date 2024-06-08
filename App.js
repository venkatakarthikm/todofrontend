import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import MyTabs from './navigation/MyTabs';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <NavigationContainer>
      {isAuthenticated ? <MyTabs /> : <AuthStack onLogin={handleLogin} />}
    </NavigationContainer>
  );
}
