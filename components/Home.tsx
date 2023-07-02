/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <div className="pt-20 min-w-full relative">
                <Image src="/home.png" className='w-full z-0  md:opacity-100 opacity-50' width={200} height={200} alt="logo">
                </Image>
                <img alt='' src='/Home/home-text.png' width={500} height={500} className='md:w-[45vw] md:h-[25vw] h-20 w-52 z-10 pt-0 md:absolute md:block md:top-60 md:left-20 hidden' />
                <span className='absolute left-12 top-[60vw]  font-extrabold md:hidden'>Transforming Healthcare through Innovative Technology</span>
            </div>
            <div className='flex md:flex-row flex-col md:gap-[10vw] w-half md:ml-12 mx-8 md:mt-28 md:mb-16 gap-[10vw] text-sm mt-20'>
                <span className='font-extrabold text-2xl md:text-4xl lg:text-5xl'>what problem are we solving?</span>
                <div className='flex flex-col gap-8 mr-10'>
                    <span className='flex flex-row gap-3 items-center'>
                        <Image src='/1.png' width={20} height={20} alt='logo' className='w-8 h-8' />
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl'>Hindering Mobility</h1>
                            <p className='hidden md:block'>Prolonged sitting can result in muscle stiffness, reduced flexibility, and weakened strength, making it harder to rise from a seated position.</p>
                        </div>
                    </span>
                    <span className='flex flex-row gap-3 items-center'>
                        <Image src='/2.png' width={20} height={20} alt='logo' className='w-8 h-8' />
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl'>Hindering Mobility</h1>
                            <p className='hidden md:block'>Prolonged sitting can result in muscle stiffness, reduced flexibility, and weakened strength, making it harder to rise from a seated position.</p>
                        </div>
                    </span>
                    <span className='flex flex-row gap-3 items-center'>
                        <Image src='/3.png' width={20} height={20} alt='logo' className='w-8 h-8' />
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl'>Hindering Mobility</h1>
                            <p className='hidden md:block'>Prolonged sitting can result in muscle stiffness, reduced flexibility, and weakened strength, making it harder to rise from a seated position.</p>
                        </div>
                    </span>
                </div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-[13vw] w-half md:mx-12 mx-8 md:my-0 gap-[5vw] text-sm mt-16'>
                <span className='font-extrabold text-2xl md:text-4xl lg:text-5xl md:my-20 my-0'>How are we solving this problem?</span>
                <div className='flex flex-col gap-4 md:gap-8'>
                    <span className='md:text-4xl font-bold text-lg sm:text-3xl'>STAND AT <span className='text-red-500'>EASE</span>
                    </span>
                    <span className='md:text-lg'>Stand at Ease is an assistive chair for the elderly who suffer from knee joint problem and face difficulty while raising up from the sitting posture.</span>
                    <div className='flex flex-row md:gap-10 gap-2'>
                        <div> <Image src="/home-1.png" className='' width={200} height={200} alt="logo"></Image></div>
                        <div> <Image src="/home-2.png" className='' width={200} height={200} alt="logo"></Image></div>
                        <div> <Image src="/home-3.png" className='' width={200} height={200} alt="logo"></Image></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
