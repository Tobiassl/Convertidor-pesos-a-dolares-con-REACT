import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Convertidor} from './components/convertidor/convertidor'
import {Header} from './components/header/header'

function App() {


  return (
    <div className="App">
      <Header/>
      <Convertidor/>
    </div>
  )
}

export default App
