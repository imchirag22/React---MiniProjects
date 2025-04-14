// Currency Converter UI with Tailwind CSS
// You can add your React functionality to this template

const CurrencyConvertor = () => {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-zinc-900 rounded-lg shadow-xl border border-zinc-800 p-6">
          {/* Header - Centered text */}
          <h2 className="text-2xl font-bold text-white mb-1 text-center">Currency Converter</h2>
          <p className="text-zinc-400 text-sm mb-6 text-center">Convert between world currencies</p>
          
          <div className="space-y-6">
            {/* From/To Currency Selection with Swap Button */}
            <div className="flex items-center">
              <div className="flex-1">
                <label className="block text-zinc-300 mb-2">From</label>
                <div className="relative">
                  <select className="w-full bg-zinc-800 border border-zinc-700 text-white py-3 px-4 pr-8 rounded appearance-none focus:outline-none focus:border-zinc-500">
                    <option>USD</option>
                    {/* Add other currency options */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Swap Button - Perfectly centered vertically */}
              <div className="flex items-center justify-center mx-2 mt-7">
                <button className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zinc-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1">
                <label className="block text-zinc-300 mb-2">To</label>
                <div className="relative">
                  <select className="w-full bg-zinc-800 border border-zinc-700 text-white py-3 px-4 pr-8 rounded appearance-none focus:outline-none focus:border-zinc-500">
                    <option>EUR</option>
                    {/* Add other currency options */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Amount Input */}
            <div>
              <label className="block text-zinc-300 mb-2">Amount</label>
              <input 
                type="number"
                placeholder="Enter amount"
                className="w-full bg-zinc-800 border border-zinc-700 text-white py-3 px-4 rounded focus:outline-none focus:border-zinc-500"
              />
            </div>
            
            {/* Converted Amount */}
            <div className="bg-zinc-800 rounded-md p-4">
              <p className="text-zinc-400 text-sm mb-1">Converted Amount</p>
              <h3 className="text-3xl font-bold text-white mb-1">0.92 EUR</h3>
              <p className="text-xs text-zinc-500">1 USD = 0.9200 EUR</p>
            </div>
            
            {/* Footer section removed - Last updated and Demo Mode removed */}
          </div>
        </div>
      </div>
    );
  };
  
  export default CurrencyConvertor;
  
  