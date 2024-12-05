import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Moon } from "lucide-react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { TonConnectButton } from '@tonconnect/ui-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function MemeBlitz() {
  const [isDark, setIsDark] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }
    }
  };

  const chartData1 = {
    labels: Array.from({length: 12}, (_, i) => i + 1),
    datasets: [{
      label: 'Price',
      data: [0.00008, 0.00009, 0.00011, 0.00012, 0.000135, 0.00014, 0.000142, 0.000145, 0.00015, 0.000152, 0.000155, 0.000158],
      borderColor: '#3B82F6',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(59, 130, 246, 0.1)'
    }]
  };

  const chartData2 = {
    labels: Array.from({length: 12}, (_, i) => i + 1),
    datasets: [{
      label: 'Price',
      data: [0.00004, 0.00005, 0.00006, 0.00007, 0.00075, 0.00008, 0.000085, 0.000087, 0.000088, 0.000089, 0.00009, 0.000091],
      borderColor: '#3B82F6',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(59, 130, 246, 0.1)'
    }]
  };

  useEffect(() => {
    document.body.className = isDark ? 'dark bg-[#1a1a1a] text-white' : 'bg-gray-50';
  }, [isDark]);

  const handleWalletConnect = () => {
    setWalletConnected(true);
    alert('Wallet connection feature would be implemented here with Web3 provider');
  };

  return (
    <div className="min-h-screen">
      <nav className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>MemeBlitz</span>
            </div>
            <div className="flex items-center space-x-4">
              <TonConnectButton />
              <Button variant="ghost" onClick={() => setIsDark(!isDark)}>
                {isDark ? <Sun /> : <Moon />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className={`p-6 ${isDark ? 'bg-gray-800' : ''}`}>
            <h3 className="text-lg font-semibold mb-2">Portfolio Value</h3>
            <p className={`text-3xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>$12,458.32</p>
            <p className="text-green-500 text-sm">+24.5% today</p>
          </Card>
          
          <Card className={`p-6 ${isDark ? 'bg-gray-800' : ''}`}>
            <h3 className="text-lg font-semibold mb-2">Active Investments</h3>
            <p className={`text-3xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>5</p>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Across 3 meme coins</p>
          </Card>

          <Card className={`p-6 ${isDark ? 'bg-gray-800' : ''}`}>
            <h3 className="text-lg font-semibold mb-2">Leaderboard Rank</h3>
            <p className={`text-3xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>#42</p>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Top 5% of traders</p>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4">Live Launches 🚀</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className={`p-6 transition-transform hover:-translate-y-1 ${isDark ? 'bg-gray-800' : ''}`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">DOGE 2.0</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Ending in 12:45:30</p>
              </div>
              <Badge variant="default">LIVE</Badge>
            </div>
            <div className="h-[200px] mb-4">
              <Line options={chartOptions} data={chartData1} />
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Current Price</p>
                <p className="text-xl font-bold">$0.000142</p>
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>24h Change</p>
                <p className="text-xl font-bold text-green-500">+156.2%</p>
              </div>
            </div>
            <Button className="w-full">Buy Now</Button>
          </Card>

          {/* Similar cards for PEPE MAX and SHIB PRO... */}
        </div>

        <Card className={`p-6 mb-8 ${isDark ? 'bg-gray-800' : ''}`}>
          <h2 className="text-2xl font-bold mb-4">AI Market Insights 🤖</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-4 rounded-lg ${isDark ? 'bg-blue-900' : 'bg-blue-50'}`}>
              <h4 className="font-semibold mb-2">Trending Analysis</h4>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                DOGE 2.0 shows strong momentum with increasing social mentions and positive sentiment across major platforms.
              </p>
            </div>
            <div className={`p-4 rounded-lg ${isDark ? 'bg-green-900' : 'bg-green-50'}`}>
              <h4 className="font-semibold mb-2">Investment Recommendation</h4>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Consider diversifying your portfolio with upcoming SHIB PRO launch based on historical performance patterns.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}