import { useState, useEffect } from "react";
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "your-secret-api-key", 
  network: Network.ETH_MAINNET, 
};

const alchemy = new Alchemy(config);

const fetchGasPrice = async () => {
  const gas = await alchemy.core.getGasPrice();
  return parseInt(gas, 16) / 1e9; // Convert to Gwei
};

function App() {
  const [gasPrice, setGasPrice] = useState(null);

  useEffect(() => {
    fetchGasPrice().then(setGasPrice);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Ethereum Gas Price</h1>
      <p className="text-lg mt-4">{gasPrice ? `${gasPrice} Gwei` : "Loading..."}</p>
    </div>
  );
}

export default App;
