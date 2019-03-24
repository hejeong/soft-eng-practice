import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import StudentApp from './student/containers/StudentApp'
import './index.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

cookies.set('changeLog')

ReactDOM.render(
    <div>
      <Login />
    </div>,
    document.getElementById('root')
  );
  