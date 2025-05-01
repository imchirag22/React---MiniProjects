import React from 'react'


import './App.css'
// import Todolist from './components/Todolist'
// import PasswordGenerator from './PasswordGenerator'
import Accordion from './projects/Accordion/Accordion'
import { AccordionData } from './projects/Accordion/AccordionData'

function App() {
  

  return (
    <>
     {/* <div className='min-h-screen bg-gray-50 flex items-center justify-center'> */}
      {/* <Todolist /> */}
      {/* <BackgroundChanger /> */}
      {/* <PasswordGenerator/> */}
      <div className="p-6 min-h-screen bg-white text-black">
      <h1 className="text-3xl font-bold mb-6 text-center">Space FAQ</h1>
      <Accordion items = {AccordionData}/>
     </div>
    </>
  )
}

export default App
