import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm z-50">
            <div className="relative flex flex-col items-center">
                {/* Outer spinning ring */}
                <div className="w-16 h-16 border-4 border-[#ff3811] rounded-full animate-spin border-t-transparent shadow-md"></div>
                
                {/* Inner dot */}
                <div className="absolute top-[26px] w-4 h-4 bg-[#ff3811] rounded-full animate-ping"></div>
                
                {/* Loading text */}
                <div className="mt-8 text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Loading</h2>
                    <div className="flex space-x-1 justify-center mt-1">
                        <div className="w-2 h-2 bg-[#ff3811] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-[#ff3811] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-[#ff3811] rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;