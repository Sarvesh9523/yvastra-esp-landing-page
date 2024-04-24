import React from 'react'
const Footer = () => {
    return (
        <div className='flex flex-col gap-12'>
            <ul className='flex flex-center justify-center gap-20 font-lato font-bold text-sky-950'>
                <li className=' hover:text-white'>
                    <a href="https://www.instagram.com/yvastraesportsofficial?igsh=MXczMHR4azNndXd3cA==" target='_blank' title='YVASTRA INSTAGRAM'>Instagram</a>
                </li>
                <li className=' hover:text-white'>
                    <a href="https://youtube.com/@LUPINGAMINGYT9523?si=b-3eg0sbbT2ZRc67" target='_blank' title='YVASTRA YOUTUBE'>Youtube</a>
                </li>
                <li className=' hover:text-white'>
                    <a href="https://www.facebook.com/profile.php?id=100022625963036" target='_blank' title='YVASTRA FACEBOOK' >Facebook</a>
                </li>
            </ul>
            <div className='flex gap-2 space-y-4' >
                <img src='/ylogo.png' alt="HELP" className='w-24' />

                <div>
                    <p className='font-playfair text-black '>Have Any Question?</p>
                    <a href="https://www.instagram.com/yvastra_lupin?igsh=eHp6MWQzOGk3ZDhv&utm_source=qr" target='_blank' className='font-lato font-medium text-black hover:text-white'>Talk To A Specialist</a>
                </div>

            </div>
        </div>
    )
}
export default Footer 