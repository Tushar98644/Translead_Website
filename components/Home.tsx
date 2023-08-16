import Image from 'next/image';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <div className="pt-12 min-w-full relative">
                <Image src="/Home/home.png" className='w-full z-0' width={200} height={200} alt="logo">
                </Image>
                <span className='absolute left-4 right-0 top-[52vw] font-extrabold md:hidden'>Transforming Healthcare through Innovative Technology</span>
            </div>
            <div className='flex flex-col md:mx-[27px] mx-[12px] md:mt-[52px] mt-[18px] text-sm'>
                <span className='font-black text-lg md:text-4xl'>What problem are we solving?</span>
            </div>
            <div className='grid md:grid-cols-3 grid-rows md:gap-8 gap-0 md:mx-[75px] mx-[20px] md:mt-[52px] mt-[18px] '>
                <div className='flex flex-col gap-4'>
                    <Image src="/Home/Hindering_Mobility.gif" className='w-full h-80' width={100} height={100} alt="logo" />
                    <span className='text-center'>Hindering Mobility</span>
                    <span className='text-sm '>Prolonged sitting can result in muscle stiffness, reduced flexibility, and weakened strength, making it harder to rise from a seated position.</span>
                </div>
                <div className='flex flex-col gap-4'>
                    <Image src="/Home/Excessive_Knee_Load.gif" className='w-full h-80 ' width={200} height={200} alt="logo" />
                    <span className='text-center'>Excessive Knee Load</span>
                    <span className='text-sm'>increased load can make it more difficult to transition from a seated to a standing position, especially for individuals with existing knee issues or conditions</span>
                </div> <div className='flex flex-col gap-4'>
                    <Image src="/Home/Long_Sitting_Hours.gif" className='w-full h-80' width={200} height={200} alt="logo" />
                    <span className='text-center'>Long Sitting Hours</span>
                    <span className='text-sm'>It may also cause tightness in the hip flexors and hamstrings, which can affect the alignment and stability of the knees.</span>
                </div>


            </div>
            <div className='flex flex-col md:mx-[27px] mx-[12px] md:mt-[82px] mt-[40px] text-sm'>
                <span className='font-black text-lg md:text-4xl'>How are we solving this problem?</span>
            </div>
            <div className='grid md:grid-cols-2 grid-rows md:gap-[520px] gap-2 md:mx-[27px] mx-[20px] text-sm'>
                <div className='flex flex-col gap-8 mt-12 md:mt-0'>
                    <span className='md:text-xl text-lg font-black md:mt-[122px] mt-[18px]'>STAND AT <span className='text-red-600'>EASE</span></span>
                    <span className='text-sm'>Stand at Eaze is an assistive chair for the elderly who suffer from knee joint problem and face difficulty while raising up from the sitting posture.</span>
                </div>
             <Image src="/Home/How_Are_We_Solving.gif" className='w-full h-full' width={200} height={200} alt="logo" />
            </div>
        </div>

    );
}

export default Home;