"use client";
import DiscussionCard from "@/components/discussionCard";
import MarketCard from "@/components/marketCard";
import { useState } from 'react';

export default function Home() {

  const discussionData = [1, 2, 3, 4, 5]; 
  const marketData = [1, 2, 3]; 

  const [selectedTab, setSelectedTab] = useState('discussion'); 

  return (
    <main className="flex min-h-screen gap-10  p-8">

      <div className="w-2/3 md:flex flex-col hidden">
        <h1 className="text-3xl text-red-600 font-bold capitalize mb-8">Discussion Forum</h1>
        {discussionData.map((item, index) => (
          <DiscussionCard key={index} />
        ))}
      </div>
      <div className="w-1/3 md:flex flex-col hidden">
        <h1 className="text-3xl text-red-600 font-bold capitalize mb-8">Market Stories</h1>        
        {marketData.map((item, index) => (
          <MarketCard key={index} />
        ))}
      </div>
      <div className="w-full md:hidden flex flex-col">
        <div className="flex items-center  justify-between">
        <button className={`capitalize font-semibold py-2 ${selectedTab === 'discussion' ? 'bg-gray-300' : 'bg-gray-100'}`} onClick={() => setSelectedTab('discussion')}>Discussion Forum</button>
        <button className={`capitalize font-semibold py-2 ${selectedTab === 'market' ? 'bg-gray-300' : 'bg-gray-100'}`} onClick={() => setSelectedTab('market')}>Market Stories</button>
        </div>
        <div style={{ display: selectedTab === 'discussion' ? 'block' : 'none' }}>
          {discussionData.map((item, index) => (
            <DiscussionCard key={index} />
          ))}
        </div>
        <div style={{ display: selectedTab === 'market' ? 'block' : 'none' }}>
          {marketData.map((item, index) => (
            <MarketCard key={index} />
          ))}
        </div>
      </div>

      
    </main>
  );
}
