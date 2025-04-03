import React from 'react'
import { useState } from 'react';

const Todolist = () => {
  /**
   * State Management:
   * - inputData: Tracks the current input field value
   * - tasks: Stores all todo items
   * - completedTasks: Stores indices of completed tasks for UI updates
   */
  const [inputData, setInputData] = useState('')
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  /**
   * Task Addition:
   * - Validates that input isn't empty
   * - Adds new task to the tasks array
   * - Clears input field after addition
   */
  const addTask = () => {
    if(inputData.trim() !== ''){
      setTasks([...tasks, inputData]);
      setInputData('');
    }
  }

  /**
   * Task Deletion:
   * - Filters out the task at the specified index
   * - Also removes the index from completedTasks to maintain consistency
   * - Uses filter method for immutable state updates
   */
  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
    // Also remove from completed tasks if it was completed
    setCompletedTasks(completedTasks.filter(index => index !== indexToDelete));
  }

  /**
   * Task Completion Toggle:
   * - Checks if task is already completed
   * - If completed, removes from completedTasks
   * - If not completed, adds to completedTasks
   * - Enables the strikethrough and checkmark UI
   */
  const toggleComplete = (index) => {
    if (completedTasks.includes(index)) {
      setCompletedTasks(completedTasks.filter(i => i !== index));
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">My Tasks</h1>
        
        {/* Main Container with Shadow and Rounded Corners */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
          <div className="p-6">
            {/* Input Field and Add Button */}
            <div className="flex mb-6">
              <input
                type="text" 
                placeholder="Add a new task..." 
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()} // Updated from onKeyPress to onKeyDown
                className="flex-grow focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 block w-full rounded-l-md sm:text-sm border-gray-300 shadow-sm p-3 outline-none"
              />
              <button 
                onClick={addTask} 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-6 rounded-r-md transition duration-150 ease-in-out"
              >
                Add
              </button>
            </div>
            
            {/* Conditional Rendering: Task List or Empty State */}
            {tasks.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {tasks.map((task, index) => (
                  <li key={index} className="py-4 flex items-center justify-between group hover:bg-gray-50 px-2 rounded">
                    <div className="flex items-center flex-grow">
                      {/* Completion Toggle Button with Dynamic Styling */}
                      <button 
                        onClick={() => toggleComplete(index)}
                        className={`mr-3 h-5 w-5 border-2 rounded-full flex items-center justify-center transition-colors ${
                          completedTasks.includes(index) 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300 hover:border-green-500'
                        }`}
                      >
                        {/* Checkmark Icon - Only Shows when Task is Completed */}
                        {completedTasks.includes(index) && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                      
                      {/* Task Text with Strikethrough Styling when Completed */}
                      <span className={`text-gray-800 flex-grow ${completedTasks.includes(index) ? 'line-through text-gray-500' : ''}`}>
                        {task}
                      </span>
                    </div>
                    
                    {/* Delete Task Button */}
                    <button 
                      onClick={() => deleteTask(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-150 ease-in-out ml-4"
                      aria-label="Delete task"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              /* Empty State with Illustration */
              <div className="text-center py-8 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p>No tasks yet. Add one above!</p>
              </div>
            )}
          </div>
          
          {/* Task Statistics Footer - Only Displays when Tasks Exist */}
          {tasks.length > 0 && (
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                {completedTasks.length} of {tasks.length} tasks completed
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Todolist