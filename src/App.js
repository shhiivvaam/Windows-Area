import React, { useEffect } from 'react';
import './App.css';
import AreaContainer from './components/AreaContainer';


function App() {

  return (
    <div className="App bg-black w-screen h-screen overflow-hidden">
      <div className='flex justify-center'>
        <AreaContainer/>
        <div className='nav-loader mt-4 ml-8'></div>
      </div>
    </div>
  );
}

export default App;
