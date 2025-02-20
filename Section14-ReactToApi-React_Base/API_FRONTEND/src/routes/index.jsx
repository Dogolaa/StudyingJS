import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';

import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MyRoute element={<Alunos />} isClosed={false} />} />
      <Route path="/aluno/:id/edit" element={<MyRoute element={<Aluno />} isClosed />} />
      <Route path="/aluno/" element={<MyRoute element={<Aluno />} isClosed />} />
      <Route path="/fotos/:id" element={<MyRoute element={<Fotos />} isClosed />} />
      <Route path="/login/" element={<MyRoute element={<Login />} isClosed={false} />} />
      <Route path="/register/" element={<MyRoute element={<Register />} isClosed={false} />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
