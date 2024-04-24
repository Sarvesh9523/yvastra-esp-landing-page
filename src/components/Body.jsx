import React from 'react'
const Body = () => {
    return (
        <div>
            <div className='flex item-center justify-center'>
                <img src="/ylogo.png"/>
            </div>
            <div className='space-y-6'>
                <div className='space-y-6'>
                    <h1 className='text-2xl font-bold  font-lato underline flex items-center justify-center leading-tight-1.25'><i>Y'VASTRA The Only Place Of Esport</i></h1>
                    <p className=' font-bold font-lato flex item-center justify-center text-black'><i>Esports organizations are entities that support and manage professional esports teams and players. These organizations play a crucial role in the competitive gaming ecosystem, providing players with resources such as coaching, training facilities, equipment, and financial support. They often compete in various video game tournaments and leagues at both national and international levels, representing their brand and sponsors. Esports organizations also engage in talent scouting, sponsorships, marketing, and event management to promote their teams and players. With the rapid growth of esports as a global phenomenon, these organizations serve as the backbone of the industry, shaping its development and driving its success.</i></p>
                    <h1 className='text-2xl font-bold  font-lato  flex items-center justify-center leading-tight-1.25'><i>Current Players</i></h1>
                </div>
                <div className=' flex flex-wrap item-center justify-center space-y-4 space-x-4  overflow-hidden overflow-x-hidden'>
                    <div class=" max-w-96 max-h-auto bg-gradient-to-tr  from-black via-white to-red-700 p-4 rounded-2xl   text-black font-playfair shadow-md shadow-white mt-4 ml-4">
                        <h1 className='flex items-center justify-center font-bold'><i>"DPOWER"</i></h1>
                        <p>DPOWER is a rising star in the esports world, known for their exceptional skills and strategic gameplay. With a competitive spirit and dedication, they've climbed the ranks to become a formidable force in their respective game. Their precision, quick thinking, and adaptability make them a force to be reckoned with on the virtual battlefield. Fans eagerly anticipate their every move, as they continue to dominate tournaments and inspire aspiring gamers worldwide.</p>
                    </div>
                    <div class=" max-w-96 max-h-auto bg-gradient-to-tr  from-black via-white to-red-700 p-4 rounded-2xl   text-black font-playfair shadow-md shadow-white ">
                        <h1 className='flex  items-center justify-center font-bold'><i>"GENICS"</i></h1>
                        <p>GENICS is a renowned figure in the esports realm, celebrated for their remarkable talent and innovative gameplay strategies. Their journey to the top has been marked by resilience, discipline, and a relentless pursuit of excellence. Known for their versatility and exceptional teamwork, GENICS consistently delivers standout performances in competitive gaming. Their unique approach to the game captivates audiences, earning them a dedicated fanbase and cementing their legacy as one of esports' brightest stars.</p>
                    </div>
                    <div class=" max-w-96 max-h-auto bg-gradient-to-tr  from-black via-white to-red-700 p-4 rounded-2xl   text-black font-playfair shadow-md shadow-white ">
                        <h1 className='flex items-center justify-center font-bold'><i>"ADITYA"</i>
                        </h1><p>ADITYA is a formidable presence in the esports scene, revered for their unparalleled skill and strategic prowess. Rising through the ranks with determination and dedication, they've established themselves as a force to be reckoned with in their chosen game. Known for their lightning-fast reflexes and innovative tactics, ADITYA commands respect from competitors and fans alike. Their journey is a testament to hard work and passion, inspiring gamers worldwide to push the boundaries of their own abilities.</p>
                    </div>
                    <div class=" max-w-96 max-h-auto bg-gradient-to-tr  from-black via-white to-red-700 p-4 rounded-2xl   text-black font-playfair shadow-md shadow-white">
                        <h1 className='flex items-center justify-center font-bold'><i>"YURAJ"</i>
                        </h1><p>YURAJ is a standout figure in the world of esports, distinguished by their exceptional talent and unwavering dedication. Rising to prominence through sheer skill and determination, they've become a force to be reckoned with in their chosen game. Known for their strategic brilliance and precise execution, YURAJ captivates audiences with every move. Their journey is a testament to the relentless pursuit of excellence, inspiring gamers around the globe to chase their dreams and reach new heights in competitive gaming.</p>
                    </div>
                </div>

                <div className='space-y-6'>
                    <p class="text-2xl font-lato font-bold flex item-center justify-center"><i>You can join us</i></p>
                    <form action="" className='flex flex-col gap-1'>
                        <input className="rounded-md px-4 py-3 placeholder:text-black placeholder:italic  " types="email" placeholder='enter email address' /><br />
                        <button className='rounded-md px-4 py-3 bg-red-300 hover:bg-red-600 text-white'>Join Us</button>
                    </form>
                </div>
            </div>



        </div>
    )
}
export default Body 