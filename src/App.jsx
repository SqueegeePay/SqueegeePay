import React from 'react';
import { CreditCard } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to SqueegeePay</h1>
        <p className="text-gray-600 mb-6">A simple payment app built with React and Tailwind CSS.</p>
        <CreditCard className="w-12 h-12 text-blue-600 mx-auto" />
      </div>
    </div>
  );
}

export default App;
