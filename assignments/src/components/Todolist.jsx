import React from 'react'
import { useState } from 'react';


const Todolist = () => {
  const[inputData, setInputData] = useState('')
  const [tasks,setTasks] = useState([])

  const addTask = () => {
    if(inputData.trim() ==! ''){
      setTasks([...tasks,inputData]);   // creates a new array with the existing tasks taking the inputData as its new task in the array

       setInputData('');   // this makes sures that after adding the task the input field gets clear for adding next tasks
      }
      
    
      
    }
  return (
    <div>
      <h1 className='text-center'>TO-DO</h1>
      <div className=' border-2 border-solid border-gray-100 p-6'>

        <div className='flex justify-between '>
        <input
        type="text" 
        placeholder='Enter Your Task' 
        value={inputData}
        onChange={(e) => setInputData (e.target.value) }
        className='flex-grow mr-[10px] p-2 border border-gray-300 rounded-l-2xl' />

        <button onClick={addTask} className = "bg-blue-600 border-blue-800 text-white p-3 rounded-r-2xl">Add Task</button>
        </div>
        
   <ul>
    {tasks.map((task, index) => (
   <li key={index}>
     {task}
    </li>
    ))}
    </ul>

      </div>
    </div>
  )
}

export default Todolist