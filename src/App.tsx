import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import PasswordRecoveryPage from "./pages/ PasswordRecoveryPage/PasswordRecoveryPage";
import PasswordCreationPage from "./pages/PasswordCreationPage/PasswordCreationPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
     App
        <ProfilePage/>
        <LoginPage/>
        <RegistrationPage/>
        <PasswordRecoveryPage/>
        <PasswordCreationPage/>
    </div>
  );
}

export default App;
