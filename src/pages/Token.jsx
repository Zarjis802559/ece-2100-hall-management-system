import { useEffect, useState } from 'react';
import { FaFilter, FaSearch, FaSpinner, FaTicketAlt } from 'react-icons/fa';

const Token = () => {
    const [tokens, setTokens] = useState([]);
    const [filteredTokens, setFilteredTokens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterTime, setFilterTime] = useState('all');

    useEffect(() => {
        const fetchTokens = async () => {
            try {
                const response = await fetch('/token.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch token data');
                }
                const data = await response.json();
                setTokens(data);
                setFilteredTokens(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching token data:', error);
                setLoading(false);
            }
        };

        fetchTokens();
    }, []);

    useEffect(() => {
        // Filter and search functionality
        let results = tokens;
        
        // Apply time filter
        if (filterTime !== 'all') {
            results = results.filter(token => token.time === filterTime);
        }
        
        // Apply search term
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            results = results.filter(token => 
                token.tokenHall.toLowerCase().includes(term) || 
                token.name.toLowerCase().includes(term) ||
                token.sellerHall.toLowerCase().includes(term)
            );
        }
        
        setFilteredTokens(results);
    }, [tokens, searchTerm, filterTime]);

    const handleBuyToken = (id) => {
        // In a real app, this would make an API call to purchase the token
        console.log(`Purchasing token with ID: ${id}`);
        alert(`Token purchased successfully! Token ID: ${id}`);
    };

    return (
        <div className="bg-gradient-to-b from-[#384959] to-[#6A89A7] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center bg-white p-2 rounded-full mb-4">
                        <FaTicketAlt className="text-[#384959] text-2xl" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Token Marketplace</h1>
                    <p className="text-[#BDDDFC] max-w-2xl mx-auto">
                        Browse available tokens for washing machines and other facilities. Contact the seller to purchase.
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="relative w-full md:w-1/2">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by hall or seller name..."
                                className="pl-10 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        
                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <FaFilter className="text-[#384959]" />
                            <select
                                className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
                                value={filterTime}
                                onChange={(e) => setFilterTime(e.target.value)}
                            >
                                <option value="all">All Times</option>
                                <option value="morning">Morning</option>
                                <option value="afternoon">Afternoon</option>
                                <option value="evening">Evening</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Tokens Grid */}
                {loading ? (
                    <div className="flex justify-center items-center py-12">
                        <FaSpinner className="text-white text-4xl animate-spin" />
                    </div>
                ) : filteredTokens.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTokens.map((token) => (
                            <div key={token._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#07074D]">{token.tokenHall}</h3>
                                            <p className="text-sm text-gray-600">Seller: {token.name}</p>
                                        </div>
                                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Available</span>
                                    </div>
                                    
                                    <div className="space-y-3 mb-5">
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-500">Date:</span>
                                            <span className="text-sm font-medium">{new Date(token.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-500">Time:</span>
                                            <span className="text-sm font-medium capitalize">{token.time}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-500">Contact:</span>
                                            <span className="text-sm font-medium">{token.phone}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-500">Seller's Hall:</span>
                                            <span className="text-sm font-medium">{token.sellerHall}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-500">Room Number:</span>
                                            <span className="text-sm font-medium">{token.roomNumber}</span>
                                        </div>
                                    </div>
                                    
                                    <button
                                        onClick={() => handleBuyToken(token._id)}
                                        className="w-full rounded-md bg-gray-900 py-2 px-5 text-center text-base font-semibold text-white outline-none hover:bg-gray-800 transition-colors duration-300"
                                    >
                                        Purchase
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <FaTicketAlt className="text-gray-400 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No tokens found</h3>
                        <p className="text-gray-500">
                            {searchTerm || filterTime !== 'all' 
                                ? "Try adjusting your filters or search term" 
                                : "There are no tokens available at the moment"}
                        </p>
                    </div>
                )}
                
                {/* Sell A Token CTA */}
                <div className="mt-16 bg-[#88BDF2] rounded-lg shadow-md p-8 text-center">
                    <h2 className="text-2xl font-bold text-[#384959] mb-4">Have a token to sell?</h2>
                    <p className="text-[#384959] mb-6 max-w-2xl mx-auto">
                        If you have an unused token for the washing machine or other facilities, you can sell it here.
                    </p>
                    <button className="bg-[#384959] text-white py-3 px-8 rounded-md font-semibold hover:bg-black transition-colors duration-300">
                        Sell Your Token
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Token;
