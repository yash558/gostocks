import React from 'react';

const MarketCard = () => {
    return (
        <div className="max-w-xs rounded overflow-hidden mb-8 shadow-lg bg-white">
            <img src="https://via.placeholder.com/400x250" alt="Market" className="w-full h-48 object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Market Card Title</div>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    );
}

export default MarketCard;
