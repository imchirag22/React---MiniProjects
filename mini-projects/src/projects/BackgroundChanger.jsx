import { useState } from 'react'

import './App.css'

function App() {
  const [bgcolor, setbgColor] = useState("#000000")


  return (
    <>
    <div className= "w-full h-screen flex flex-col items-center justify-center duration-200" style={{backgroundColor: bgcolor}}>
    
      <h1 className='text-center text-3xl font-extrabold text-white mb-16'>Background Color Changer</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
      <div className="flex flex-wrap justify-center  gap-3 shadow-lg bg-white px-6 py-2 rounded-3xl ">
        
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl mt-3 mb-3' onClick={() => setbgColor("#FF0000")}>    Red    </button>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl mt-3 mb-3' onClick={() =>  setbgColor("#00FF00")}>Green</button>
        <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-2xl mt-3 mb-3' onClick={() => setbgColor("#FFFF00")}>Yellow</button>
        <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-2xl mt-3 mb-3 ' onClick={() => setbgColor("#800080")}>Purple</button>
        <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl mt-3 mb-3' onClick={() => setbgColor("#808080")}>Gray</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App