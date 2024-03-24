"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface SidebarItem {
    label: string;
    href: string;
    icon?: string;
}

const sidebarItems: SidebarItem[] = [
    { label: 'Discussion Forum', href: '/' },
    { label: 'Market Stories', href: '/dashboard' },
    { label: 'Sentiment', href: '/settings', icon: 'fas fa-cog' },
    { label: 'Market', href: '/settings', icon: 'fas fa-cog' },
    { label: 'Sector', href: '/settings', icon: 'fas fa-cog' },
    { label: 'Watchlist', href: '/settings', icon: 'fas fa-cog' },
    { label: 'Events', href: '/settings', icon: 'fas fa-cog' },
    { label: 'News/Interview', href: '/settings', icon: 'fas fa-cog' },
];

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`h-screen flex flex-col ${isOpen ? 'md:w-64 w-32' : 'w-2'}`}>

            {isOpen && (
                <>
                    <div className="flex-grow flex flex-col bg-gray-800 text-white">
                        <button onClick={toggleSidebar} className="md:hidden px-4 py-2 text-white">
                            <i className="fas fa-bars"></i> 
                        </button>
                        <div className="flex-grow flex flex-col items-center justify-center py-4">
                            <div className="flex items-center mb-4">
                                <img src="/logo.svg" alt="Logo" className="w-10 h-10 mr-2" />
                                <h1 className="text-xl font-bold">My Dashboard</h1>
                            </div>
                        </div>
                        <nav className="flex-grow overflow-auto px-4">
                            {sidebarItems.map((item) => (
                                <Link href={item.href} key={item.label} passHref className="flex items-center px-2 py-4 text-sm hover:bg-gray-700 rounded">


                                    {item.label}

                                </Link>
                            ))}
                        </nav>
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;

