import React from 'react';
import './index.css';

import TodoList from './pages/TodoList';

export default function App() { //* 'export default' => berfungsi untuk mengubah fungsi yang dipanggil menjadi 'Javascript Module'
  return (
    //mengganti div <container> & <frame> dengan component <Paper>, agar bisa menjadi re-usable
    <TodoList />
  );
}
