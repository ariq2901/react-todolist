import React from 'react';
import Todo  from './Todo';

const Todos = () => {
  const list = [
    {
      text: 'Belajar React!'
    },
    {
      text: 'Belajar di React!'
    },
    {
      text: 'Belajar Wegodev React!'
    },
    {
      text: 'Belajar React Hooks!'
    },
    {
      text: 'Belajar di React!'
    },
    {
      text: 'Belajar Wegodev React!'
    },
    {
      text: 'Belajar React Hooks!'
    }
  ];

  return (
    <section className="todos">
      {list.map(ariq => {
        return (
          <Todo text={ariq.text}/>
        )
      })}
    </section>
  );
}

export default Todos;