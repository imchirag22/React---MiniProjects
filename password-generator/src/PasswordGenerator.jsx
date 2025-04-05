import { useState } from 'react';

function PasswordGenerator() {
  // State hooks - remembering user preferences & results
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12); // Default length is 12 chars
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true); // On by default
  const [includeNumbers, setIncludeNumbers] = useState(true); // On by default
  const [includeSymbols, setIncludeSymbols] = useState(true); // On by default

  // Character pools - might add more symbols later if needed
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()';

  const generatePassword = () => {
    // Step 1: Build our character set based on selections
    let charSet = "";
    let newPassword = "";

    if (includeUppercase) charSet += uppercase;
    if (includeLowercase) charSet += lowercase;
    if (includeNumbers) charSet += numbers;
    if (includeSymbols) charSet += symbols;

    // Safety check - prevent empty passwords
    if (charSet === ''){
      alert('Select at least one character type');
      return; // Exit early if nothing selected
    }
    
    // Step 2: Ensure security by including at least one of each selected type
    // This prevents weak passwords even at short lengths
    if (includeUppercase) newPassword += uppercase[Math.floor(Math.random() * uppercase.length)];
    if (includeLowercase) newPassword += lowercase[Math.floor(Math.random() * lowercase.length)];
    if (includeNumbers) newPassword += numbers[Math.floor(Math.random() * numbers.length)];
    if (includeSymbols) newPassword += symbols[Math.floor(Math.random() * symbols.length)];

    // Step 3: Fill up to desired length with random chars
    for (let i = newPassword.length; i < length; i++){
      const randomIndex = Math.floor(Math.random() * charSet.length);
      newPassword += charSet[randomIndex];
    }
    
    // Step 4: Shuffle to avoid predictable patterns from step 2
    newPassword = shuffleString(newPassword);
    setPassword(newPassword);
  };
  
  // Fisher-Yates shuffle - learned this for randomizing arrays efficiently
  const shuffleString = (str) => {
    const array = str.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // ES6 swap - so clean!
    }
    return array.join('');
  };
  
  // Simple clipboard function with error handling
  const copyToClipboard = () => {
    if(password){
      navigator.clipboard.writeText(password)
        .then(() => {
          alert('Copied to Clipboard');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          alert('Failed to copy. Please try manually selecting the password.');
        });
    }
  };
  
  return (
    <div className="max-w-md mx-auto mt-12 px-4 pb-12">
      {/* Title is now outside the box */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Password Generator</h1>
      
      {/* Main container box */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        {/* Result display with copy button */}
        <div className="flex items-center border rounded-md mb-5 bg-gray-50 overflow-hidden">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 bg-transparent outline-none p-3 text-gray-700"
            placeholder="Your password will appear here"
          />
          <button 
            onClick={copyToClipboard} 
            className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none transition"
            title="Copy to clipboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
          </button>
        </div>
        
        {/* Length slider */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-2">
            <label className="text-gray-700 text-sm font-medium">Password Length</label>
            <span className="text-gray-500 bg-gray-100 px-2 py-1 rounded text-sm">{length}</span>
          </div>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-700"
          />
          <div className="flex justify-between text-xs text-gray-400 px-1 mt-1">
            <span>8</span>
            <span>16</span>
            <span>24</span>
            <span>32</span>
          </div>
        </div>
        
        {/* Character type options */}
        <div className="space-y-3 mb-6">
          <div className="text-sm font-medium text-gray-700 mb-2">Include:</div>
          
          <label className="flex items-center text-gray-600 hover:bg-gray-50 rounded p-2 transition group">
            <div className="relative mr-3 flex items-center justify-center">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="opacity-0 absolute h-5 w-5 cursor-pointer"
              />
              <div className={`border w-5 h-5 rounded flex items-center justify-center ${includeUppercase ? 'bg-gray-700 border-gray-700' : 'border-gray-300 group-hover:border-gray-400'}`}>
                {includeUppercase && <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>}
              </div>
            </div>
            Uppercase Letters (A-Z)
          </label>
          
          <label className="flex items-center text-gray-600 hover:bg-gray-50 rounded p-2 transition group">
            <div className="relative mr-3 flex items-center justify-center">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className="opacity-0 absolute h-5 w-5 cursor-pointer"
              />
              <div className={`border w-5 h-5 rounded flex items-center justify-center ${includeLowercase ? 'bg-gray-700 border-gray-700' : 'border-gray-300 group-hover:border-gray-400'}`}>
                {includeLowercase && <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>}
              </div>
            </div>
            Lowercase Letters (a-z)
          </label>
          
          <label className="flex items-center text-gray-600 hover:bg-gray-50 rounded p-2 transition group">
            <div className="relative mr-3 flex items-center justify-center">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="opacity-0 absolute h-5 w-5 cursor-pointer"
              />
              <div className={`border w-5 h-5 rounded flex items-center justify-center ${includeNumbers ? 'bg-gray-700 border-gray-700' : 'border-gray-300 group-hover:border-gray-400'}`}>
                {includeNumbers && <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>}
              </div>
            </div>
            Numbers (0-9)
          </label>
          
          <label className="flex items-center text-gray-600 hover:bg-gray-50 rounded p-2 transition group">
            <div className="relative mr-3 flex items-center justify-center">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="opacity-0 absolute h-5 w-5 cursor-pointer"
              />
              <div className={`border w-5 h-5 rounded flex items-center justify-center ${includeSymbols ? 'bg-gray-700 border-gray-700' : 'border-gray-300 group-hover:border-gray-400'}`}>
                {includeSymbols && <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>}
              </div>
            </div>
            Symbols (!@#$%^&*)
          </label>
        </div>
        
        {/* Main action button */}
        <button
          onClick={generatePassword}
          className="w-full bg-gray-800 text-white py-3 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;