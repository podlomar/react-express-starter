import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <h1>Hello world!</h1>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
