import React from 'react'
import { FaBars } from "react-icons/fa";
const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex item-center justify-center gap-2 mt-2'>
                <img src="/ylogo.png" alt="logo" class="w-10 h-10" />
                <button className='bg-gradient-to-tr from-red-700 via-stone-300 to-black text-xs text-black px-2.5 py- 1.5 rounded-2xl font-bold font-lato'>
                    Y'VASTRA ESPORT
                </button>
            </div>
            <div className='mt-4 mr-2'>
                <FaBars style={{color:'white'}} />
            </div>
        </div>
    )
}
export default Header 