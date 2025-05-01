import { useState, useEffect } from "react";

const CurrencyConvertor = () => {
    const [currencies, setCurrencies] = useState({});
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [result, setResult] = useState(null);
    const [rate, setRate] = useState(null);

    const fetchCurrencies = async () => {
      try { 
        const res = await fetch('https://api.frankfurter.dev/v1/latest');
        const data = await res.json();
        setCurrencies(data.rates);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    useEffect(() => {
        fetchCurrencies();
    }, []); 

    const handleConversion = async() => {
      try {
        const res = await fetch(`https://api.frankfurter.dev/v1/latest?base=${fromCurrency}&symbols=${toCurrency}`);
        const data = await res.json();
        
        
        const currentRate = data.rates[toCurrency];
        const convertedAmount = amount * currentRate;
        
        setRate(currentRate);
        setResult(convertedAmount);
      } catch (error) {
        console.log("Conversion Error:", error);
      }
    };
    
    const handleSwap = () => {
      
      setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
      
      setTimeout(() => {
        handleConversion();
      }, 100);
    };

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
                  <select
                   value={fromCurrency}
                   onChange={(e) => setFromCurrency(e.target.value)}
                   className="w-full bg-zinc-800 border border-zinc-700 text-white py-3 px-4 pr-8 rounded appearance-none focus:outline-none focus:border-zinc-500">
                    
                    {Object.keys(currencies).length > 0 ? (
                      Object.keys(currencies).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                      ))
                    ) : (
                      <option value="USD">USD</option>
                    )}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Swap Button  */}
              <div className="flex items-center justify-center mx-2 mt-7">
                <button 
                onClick={handleSwap}
                className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zinc-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1">
                <label className="block text-zinc-300 mb-2">To</label>
                <div className="relative">
                  <select
                   value={toCurrency}
                   onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 text-white py-3 px-4 pr-8 rounded appearance-none focus:outline-none focus:border-zinc-500">
                    
                    {Object.keys(currencies).length > 0 ? (
                      Object.keys(currencies).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                      ))
                    ) : (
                      <option value="EUR">EUR</option>
                    )}
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
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full bg-zinc-800 border border-zinc-700 text-white py-3 px-4 rounded focus:outline-none focus:border-zinc-500"
              />
            </div>
            <button
              onClick={handleConversion}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              Convert
            </button>
            
            {/* Converted Amount - Now showing dynamic values */}
            <div className="bg-zinc-800 rounded-md p-4">
              <p className="text-zinc-400 text-sm mb-1">Converted Amount</p>
              <div className="flex items-center space-x-3 my-2">
                <div>
                  <span className="text-2xl font-bold text-white">{amount}</span>
                  <span className="text-lg text-white ml-1">{fromCurrency}</span>
                </div>
                <span className="text-zinc-400">=</span>
                <div>
                  <span className="text-2xl font-bold text-white">
                    {result ? result.toFixed(2) : "0.00"}
                  </span>
                  <span className="text-lg text-white ml-1">{toCurrency}</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500">
                1 {fromCurrency} = {rate ? rate.toFixed(4) : "0.0000"} {toCurrency}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CurrencyConvertor;