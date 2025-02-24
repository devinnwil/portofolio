import React from 'react';

const CatBongo = () => {
  return (
    <div className='w-32 h-24 absolute bg-white rounded-[8px] relative z-50 top-0 left-0'>
        <div className="w-full absolute h-full flex items-center justify-center">
            <img
                src="https://media1.tenor.com/m/0ygiqFaX-ssAAAAC/bongo-cat-typing.gif"
                alt="Bongo Cat Typing"
                className="w-16 h-16 absolute" // Adjusted gif size
            />
        </div>
        <div className="absolute top-2 left-2 text-black text-xs font-medium">
            This is just a smol me
        </div>
    </div>
  );
};

export default CatBongo;
