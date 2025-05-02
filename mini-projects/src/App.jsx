import React from 'react'
// import Todolist from './components/Todolist'
// import PasswordGenerator from './PasswordGenerator'
// import Accordion from './projects/Accordion/Accordion'
// import { AccordionData } from './projects/Accordion/AccordionData'
import StarRating from './projects/StarRating/StarRating';
function App() {
  const handleRate = (score) => {
    console.log('User rated:', score);
  };
  return (
    <>
     {/* <div className='min-h-screen bg-gray-50 flex items-center justify-center'> */}
      {/* <Todolist /> */}
      {/* <BackgroundChanger /> */}
      {/* <PasswordGenerator/> */}
      {/* <div className="p-6 min-h-screen bg-white text-black">
      <h1 className="text-3xl font-bold mb-6 text-center">Space FAQ</h1>
      <Accordion items = {AccordionData}/>
     </div> */}
     <div className="p-6 min-h-screen bg-white text-black flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Rate this product:</h1>
      <StarRating totalStars={5} onRate={handleRate} />
    </div>
    </>
  )
}

export default App
