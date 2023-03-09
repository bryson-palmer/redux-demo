import React from 'react'

import { styled } from '@mui/material/styles'

// import logo from '../UI/Icons/logo.svg'
import AppHeader from './AppHeader'
import Nav from './Nav'
// import { Counter } from '../features/counter/Counter'
// import './index.css'

const Main = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  background: 'blue',
}))

function App() {
  return (
    <Main>
      <AppHeader />
      <Nav />
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div> */}
    </Main>
  );
}

export default App
