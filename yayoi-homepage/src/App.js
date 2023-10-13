import logo from './2.jpg';
import './App.css';
import Header from './components/Header/Header';
import DoctorIntroduction from './components/DoctorIntroduction/DoctorIntroduction';
import TopPage from './components/TopPgae/TopPage';
import { Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="doctor_introduction" element={<DoctorIntroduction />} />

      </Routes>
      {/* <RouterProvider router={router} /> */}
      
    </div>
  );
}

export default App;
