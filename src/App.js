import React, { useState } from 'react'

import Header from './layout/Header';
import Main from './layout/Main'

const App = () => {
  return (
    <div className='h-full flex flex-grow items-center flex-col main-container' >
      <Header />
      <Main />
    </div>
  );
}



export default App;
