import React, { useState } from 'react'

import Header from './components/Header';
import Main from './components/Main'

const App = () => {
  return (
    <div className='h-full flex flex-grow items-center flex-col main-container' >
      <Header />
      <Main />
    </div>
  );
}

export default App;
