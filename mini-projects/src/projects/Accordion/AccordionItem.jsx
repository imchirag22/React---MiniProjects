import React from 'react'

const AccordionItem = ({ isOpen, onClick, header, children }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      onClick={onClick}
      className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none"
      aria-expanded={isOpen}
    >
      <span>{header}</span>
      <span
        className="transform transition-transform duration-200"
        style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}
      >
        ▼
      </span>
    </button>
    <div
      className={`px-4 overflow-hidden transition-[max-height] duration-300 ${
        isOpen ? 'max-h-40 py-3' : 'max-h-0'
      }`}
    >
      {children}
    </div>
  </div>
  )
}

export default AccordionItem