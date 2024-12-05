import React, { useState } from 'react';
import { ethers, parseEther } from 'ethers';

const TokenLaunchPlatform: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [tokenData, setTokenData] = useState<any>(null); // State to store token data
  const [transactionHash, setTransactionHash] = useState<string>('');

  // Handle theme toggle
  const handleThemeToggle = () => {
    setIsDark(prevState => !prevState);
  };

  // Handle token launch form submission
  const handleLaunchFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Retrieve form data
    const form = e.target as HTMLFormElement;
    const tokenName = form.tokenName.value;
    const tokenSymbol = form.tokenSymbol.value;
    const initialSupply = form.initialSupply.value;

    // Check if MetaMask is installed and connected
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      try {
        // Request account access if not already granted
        await provider.send('eth_requestAccounts', []);

        // Get the current account address
        const account = await signer.getAddress();
        console.log('Connected Account:', account);

        // Example of sending a transaction to the testnet (replace with actual token logic)
        const tx = await signer.sendTransaction({
          to: '0xYourTestnetAddress', // Replace with your testnet contract address or destination
          value: parseEther('0.1'), // Example: Sending 0.1 ETH
        });

        // Wait for the transaction to be mined
        const receipt = await tx.wait();

        // Log the transaction hash and token data
        setTransactionHash(tx.hash);
        console.log('Transaction Hash:', tx.hash);

        const tokenJsonData = {
          name: tokenName,
          symbol: tokenSymbol,
          supply: initialSupply,
        };

        console.log('Token JSON Data:', JSON.stringify(tokenJsonData, null, 2));

        // Optionally set the token data to show on the UI
        setTokenData(tokenJsonData);

        alert('Token launch transaction successful on Testnet!');
      } catch (error) {
        console.error('Error during token launch:', error);
        alert('Token launch failed. Please try again.');
      }
    } else {
      alert('Please install MetaMask or another wallet to connect.');
    }
  };

  return (
    <div className={`bg-gray-50 ${isDark ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-6">
          <button
            id="themeToggle"
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleThemeToggle}
          >
            <i className="bi bi-moon-stars"></i> Toggle Theme
          </button>
        </div>

        {/* Token Launch Form */}
        <div className="card bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Launch Your Token</h2>
          <form id="launchForm" onSubmit={handleLaunchFormSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Token Name</label>
              <input type="text" name="tokenName" className="w-full p-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Token Symbol</label>
              <input type="text" name="tokenSymbol" className="w-full p-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Initial Supply</label>
              <input type="number" name="initialSupply" className="w-full p-2 border rounded-lg" required />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
              Launch Token
            </button>
          </form>
        </div>

        {/* Display Token Data */}
        {tokenData && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Token Launch Details:</h3>
            <pre>{JSON.stringify(tokenData, null, 2)}</pre>
            <p><strong>Transaction Hash:</strong> {transactionHash}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TokenLaunchPlatform;
