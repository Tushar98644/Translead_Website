/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <div className="pt-20 min-w-full relative">
                <Image src="/home.png" className='w-full z-0' width={200} height={200} alt="logo">
                </Image>
                <img alt='' src='/home-text.png' width={500} height={500} className='md:w-[45vw] md:h-[25vw] h-20 w-52 z-10 pt-0 absolute md:top-60 md:left-20 top-36 left-2 sm:h-[22vw] sm:w-[45vw] sm:left-20 sm:top-48' />
            </div>
            <div className='flex flex-row md:gap-[30vw] w-half ml-12 md:my-40 gap-[10vw] text-sm mt-20'>
                <span className='font-extrabold text-2xl md:text-4xl lg:text-5xl'>what problem are <br /> we solving?</span>
                <div className='flex flex-col gap-8'>
                    <span className='flex flex-row gap-3 items-center'>
                        <Image src='/1.png' width={20} height={20} alt='logo' className='w-8 h-8' />
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl'>Hindering Mobility</h1>
                            <p>Prolonged sitting can result in muscle stiffness, reduced flexibility, and weakened strength, making it harder to rise from a seated position.</p>
                        </div>
                    </span>
                    <span className='flex flex-row gap-3 items-center'>
                        <Image src='/2.png' width={20} height={20} alt='logo' className='w-8 h-8' />
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl'>Hindering Mobility</h1>
                            <p>Prolonged sitting can result in muscle stiffness, reduced flexibility, and weakened strength, making it harder to rise from a seated position.</p>
                        </div>
                    </span>
                    <span className='flex flex-row gap-3 items-center'>
                        <Image src='/3.png' width={20} height={20} alt='logo' className='w-8 h-8' />
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl'>Hindering Mobility</h1>
                            <p>Prolonged sitting can result in muscle stiffness, reduced flexibility, and weakened strength, making it harder to rise from a seated position.</p>
                        </div>
                    </span>
                </div>
            </div>
        </div>

    );
}

export default Home;
