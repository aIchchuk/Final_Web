// App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import MoreInfo from "./Pages/MoreInfo";
import Login from "./Pages/Login_Register/Login";
import UserAdd from "./Pages/Users/UserAdd";
import UserList from "./Pages/Users/UserList";
import NoPage from "./Pages/NoPage";
import Dashboard from "./Pages/Dashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:userId/dashboard" element={<Dashboard />} />
          <Route path="/users/add" element={<UserAdd />} />
          <Route path="/users" element={<UserList />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
