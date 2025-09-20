import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [color, setColor] = useState("gray");

  return (
    <div className='w-screen h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2 bg-red-900 rounded-full mx-50'>
        <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white px-4 py-1 rounded-full'>
          <button
            className='outline-none px-2 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className='outline-none px-2 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className='outline-none px-2 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className='outline-none px-2 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "gray" }}
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button
            className='outline-none px-2 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className='outline-none px-2 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "cyan" }}
            onClick={() => setColor("cyan")}
          >
            Cyan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;