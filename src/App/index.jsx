import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { styled } from '@mui/material/styles'

import Dashboard from '../Dashboard'
import DataVisualization from '../DataVisualization'
import Pathfinder from '../Pathfinder'
import Sorting from '../Sorting'

import AppHeader from './AppHeader'
import Nav from './Nav'

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
      <Routes>
        <Route path='/'/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dataVisualization' element={<DataVisualization />} />
        <Route path='/pathfinder' element={<Pathfinder />} />
        <Route path='/sorting' element={<Sorting />} />
      </Routes>
    </Main>
  )
}

export default App
