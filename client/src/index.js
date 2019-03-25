import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

cookies.set('changeLog')

ReactDOM.render(
    <div>
      <Main />
    </div>,
    document.getElementById('root')
  );
  