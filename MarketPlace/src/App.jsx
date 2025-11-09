import { useEffect, useState } from 'react'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Bar from './OptionsBar.jsx'
import Card from './Card.jsx'

function App() {
  return(
    <>
    <Navbar></Navbar>
    <Header></Header>
    <Bar></Bar>
    <Card></Card>
    </>
  )
}

export default App
