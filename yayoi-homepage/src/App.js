import logo from './2.jpg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import DoctorIntroduction from './components/DoctorIntroduction/DoctorIntroduction';
import PatientRegistration from './components/PatientRegistration/PatientRegistration';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import SecondOpinion from './components/SecondOpinion/SecondOpinion';
import TopPage from './components/TopPgae/TopPage';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/doctor_introduction" element={<DoctorIntroduction />} />
        <Route path="/patient_registration" element={<PatientRegistration />} />
        <Route path="/application_form" element={<ApplicationForm />} />
        <Route path="/second_opinion" element={<SecondOpinion />} />
      </Routes>
    </div>
  );
}

export default App;
