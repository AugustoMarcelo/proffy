import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import ForgotPassword from './pages/ForgotPassword';
import ResetSentSuccess from './pages/ResetSentSuccess';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/register-success" component={RegisterSuccess} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-sent" component={ResetSentSuccess} />
      <Route path="/home" component={Home} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
