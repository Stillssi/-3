import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartSelectPage from '../pages/startpage';
import Tutorials from '../pages/tutorials';
import LoginPage from '../pages/loginpage';
import Report from '../pages/report';
import Redirection from '../pages/logincallback';
const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route
        path="/start"
        element={
          <>
            <StartSelectPage />
            <Redirection />
          </>
        }
      ></Route>
      <Route path="/tutorials" element={<Tutorials />}></Route>
      <Route path="/report" element={<Report />}></Route>
    </Routes>
  );
};

export default Router;
