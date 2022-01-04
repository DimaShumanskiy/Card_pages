import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import PasswordRecoveryPage from "./pages/ PasswordRecoveryPage/PasswordRecoveryPage";
import PasswordCreationPage from "./pages/PasswordCreationPage/PasswordCreationPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TestPage from "./pages/TestPage/TestPage";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<ProfilePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/registration" element={<RegistrationPage/>}/>
            <Route path="/password-recovery" element={ <PasswordRecoveryPage/>}/>
            <Route path="/password-creation" element={<PasswordCreationPage/>}/>
            <Route path="/test" element={<TestPage/>}/>

            <Route path="/404" element={<ErrorPage/>}/>
            <Route path="*" element={<Navigate to="/404"/>}/>
        </Routes>
    </div>
  );
}

export default App;
