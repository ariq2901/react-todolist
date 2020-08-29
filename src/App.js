import React from 'react';
import './index.css';

import Paper from './components/Paper';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

export default function App() { //* 'export default' => berfungsi untuk mengubah fungsi yang dipanggil menjadi 'Javascript Module'
  return (
    //mengganti div <container> & <frame> dengan component <Paper>, agar bisa menjadi re-usable
    <Paper>
      <Header />

      <TodoForm />

      <Todos />
    </Paper>
  );
}

