import React, { useState } from 'react';

const Header = () => {
    const [activeButton, setActiveButton] = useState('Home'); // Set initial state to "Home"

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <header className="text-white py-8 px-6">
            <div className="flex justify-between items-center">
                <h1 className="text-md font-semibold text-[#F6F6F6]">Devin Wilbert</h1>
                <div className="flex">
                    <h2
                        className={`text-md font-semibold px-6 cursor-pointer ${
                            activeButton === 'Home' ? 'text-[#F6F6F6]' : 'text-[#9F9FA8]'
                        }`}
                        onClick={() => handleClick('Home')}
                    >
                        Home                    
                    </h2>
                </div>
            </div>
        </header>
    );
};

export default Header;
