import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MyRoute element={<Login />} />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
