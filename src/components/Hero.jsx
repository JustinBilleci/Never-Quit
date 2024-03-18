import React from 'react'

export default function Hero() {
    return (          // w Tailwind CSS you can change the CSS for an element directly by the className, to do custom amount of pixels in Tailwind you must use []
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>  
        <div className='flex flex-col gap-4'>
        <p>Here, we...</p>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>NEVER<span className='text-blue-400'>QUIT</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>Being able to keep going when you want to give up is a skill not many have, our goal here at <span className='text-blue-400 font-medium'>NeverQuit</span> is to hold you accountable for all of your workout goals.</p>
        <button className='px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'> 
            <p>Accept & Begin</p>
        </button>
    </div>
    ) // duration on button makes it incredibly smooth
}
