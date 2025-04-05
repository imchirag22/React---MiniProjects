import React from 'react'


import './App.css'
import Todolist from './components/Todolist'
import PasswordGenerator from './PasswordGenerator'

function App() {
  

  return (
    <>
     <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      
      {/* <Todolist /> */}
      {/* <BackgroundChanger /> */}
      <PasswordGenerator/>
     </div>
    </>
  )
}

export default App
