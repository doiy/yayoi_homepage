import logo from './2.jpg';
import './App.css';
import Header from './components/Header/Header';
import DoctorIntroduction from './components/DoctorIntroduction/DoctorIntroduction';
import PatientRegistration from './components/PatientRegistration/PatientRegistration';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import SecondOpinion from './components/SecondOpinion/SecondOpinion';

import TopPage from './components/TopPgae/TopPage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <TopPage />,
//   },

//   {
//     path: "doctor_introduction",
//     element: <DoctorIntroduction />,
//   },
// ]);


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/doctor_introduction" element={<DoctorIntroduction />} />
          <Route path="/test" element={<PatientRegistration />} />
          <Route path="/test2" element={<ApplicationForm />} />
          <Route path="/second_opinion" element={<SecondOpinion />} />


        </Routes>
      </Router>
      {/* <RouterProvider router={router} /> */}
      
    </div>
  );
}

export default App;
