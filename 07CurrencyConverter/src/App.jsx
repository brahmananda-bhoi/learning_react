import { useState, useEffect } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
// import backgroundImage from './assets/image.jpg';

function App() {
  const [amount, setAmount] = useState("1"); // Default to 1 USD
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const { data: currencyInfo, error, loading } = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    const tempFrom = from;
    const tempTo = to;
    const tempAmount = amount;
    const tempConverted = currencyInfo && currencyInfo[to] && amount && !isNaN(Number(amount))
      ? (Number(amount) / currencyInfo[to]).toFixed(2)
      : convertedAmount;
    setFrom(tempTo);
    setTo(tempFrom);
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount || tempConverted);
  };

    useEffect(() => {
    // console.log('useEffect ran', { amount, from, to, loading, hasCurrencyInfo: !!currencyInfo, hasToRate: !!currencyInfo[to.toUpperCase()], convertedAmount });
    if (!loading && currencyInfo && currencyInfo[to.toUpperCase()] && amount && !isNaN(Number(amount)) && Number(amount) >= 0) {
      setConvertedAmount((Number(amount) * currencyInfo[to.toUpperCase()]).toFixed(2));
    } else {
      setConvertedAmount("");
      if (!loading && currencyInfo && !currencyInfo[to.toUpperCase()]) {
        console.error(`Rate for ${to.toUpperCase()} not found in API response`);
      }
    }
  }, [amount, from, to, currencyInfo, loading]);

  if (error) {
    return (
      <div
        className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundColor: '#f0f0f0', // Fallback
        }}
      >
        <div className="bg-white/30 p-5 rounded-lg text-center">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        // backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#f0f0f0', // Fallback
      }}
    >
      <div className="w-full max-w-md mx-auto">
        <div className="border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {loading && (
            <div className="text-center mb-4 text-white">Loading currencies...</div>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            aria-label="Currency Converter Form"
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(value) => setAmount(value >= 0 ? String(value) : "")}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700 disabled:bg-blue-400"
                onClick={swap}
                disabled={loading}
                aria-label="Swap currencies"
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
              disabled={loading || !amount || Number(amount) < 0 || !currencyInfo || !currencyInfo[to]}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;