/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <div className="pt-20 min-w-full relative">
                <Image src="/Home/home.png" className='w-full z-0  md:opacity-100 opacity-50' width={200} height={200} alt="logo">
                </Image>
                <img alt='' src='/Home/home-text.png' width={500} height={500} className='md:w-[45vw] md:h-[25vw] h-20 w-52 z-10 pt-0 md:absolute md:block md:top-60 md:left-20 hidden' />
                <span className='absolute left-4 right-0 top-[60vw] font-extrabold md:hidden'>Transforming Healthcare through Innovative Technology</span>
            </div>
            <div className='flex md:flex-row flex-col md:gap-[10vw] w-half md:mx-12 mx-4 md:mt-28 md:mb-16 gap-4 text-sm mt-6'>
                <span className='md:font-extrabold font-bold text-lg md:text-4xl lg:text-5xl'>What problem are we solving?</span>
                <div className="md:hidden items-start flex">
                    <svg width="400" height="1" viewBox="0 0 738 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="738" y2="0.5" stroke="black" />
                    </svg>
                </div>
                <div className='flex flex-col md:gap-8 gap-2'>
                    <span className='flex flex-row gap-5 items-center'>
                        <Image src='/Home/1.png' width={20} height={20} alt='logo' className='w-8 h-8 md:block hidden' />
                        <svg className='md:hidden' width="15" height="12" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.934547 4.572C0.934547 3.196 1.15855 2.124 1.60655 1.356C2.05455 0.58 2.83855 0.192 3.95855 0.192C5.07055 0.192 5.85055 0.58 6.29855 1.356C6.74655 2.124 6.97055 3.196 6.97055 4.572C6.97055 5.972 6.74655 7.06 6.29855 7.836C5.85055 8.612 5.07055 9 3.95855 9C2.83855 9 2.05455 8.612 1.60655 7.836C1.15855 7.06 0.934547 5.972 0.934547 4.572ZM5.89055 4.572C5.89055 3.876 5.84255 3.288 5.74655 2.808C5.65855 2.32 5.47055 1.928 5.18255 1.632C4.90255 1.336 4.49455 1.188 3.95855 1.188C3.41455 1.188 2.99855 1.336 2.71055 1.632C2.43055 1.928 2.24255 2.32 2.14655 2.808C2.05855 3.288 2.01455 3.876 2.01455 4.572C2.01455 5.292 2.05855 5.896 2.14655 6.384C2.24255 6.872 2.43055 7.264 2.71055 7.56C2.99855 7.856 3.41455 8.004 3.95855 8.004C4.49455 8.004 4.90255 7.856 5.18255 7.56C5.47055 7.264 5.65855 6.872 5.74655 6.384C5.84255 5.896 5.89055 5.292 5.89055 4.572ZM8.4217 1.32V0.323999H10.6777V9H9.5737V1.32H8.4217Z" fill="#FB1010" />
                        </svg>
                        <div className='flex flex-col gap-2'>
                            <h1 className='md:text-xl text-base'>Hindering Mobility</h1>
                            <p className='hidden md:block'>Prolonged sitting can result in muscle stiffness, reduced flexibility, and weakened strength, making it harder to rise from a seated position.</p>
                        </div>
                    </span>
                    <div className="md:flex items-center hidden">
                        <svg width="auto" height="1" viewBox="0 0 738 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="738" y2="0.5" stroke="black" />
                        </svg>
                    </div>
                    <span className='flex flex-row gap-4 items-center'>
                        <Image src='/Home/2.png' width={20} height={20} alt='logo' className='w-8 h-8 md:block hidden' />
                        <svg className='md:hidden' width="17" height="13" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.40525 4.572C0.40525 3.196 0.62925 2.124 1.07725 1.356C1.52525 0.58 2.30925 0.192 3.42925 0.192C4.54125 0.192 5.32125 0.58 5.76925 1.356C6.21725 2.124 6.44125 3.196 6.44125 4.572C6.44125 5.972 6.21725 7.06 5.76925 7.836C5.32125 8.612 4.54125 9 3.42925 9C2.30925 9 1.52525 8.612 1.07725 7.836C0.62925 7.06 0.40525 5.972 0.40525 4.572ZM5.36125 4.572C5.36125 3.876 5.31325 3.288 5.21725 2.808C5.12925 2.32 4.94125 1.928 4.65325 1.632C4.37325 1.336 3.96525 1.188 3.42925 1.188C2.88525 1.188 2.46925 1.336 2.18125 1.632C1.90125 1.928 1.71325 2.32 1.61725 2.808C1.52925 3.288 1.48525 3.876 1.48525 4.572C1.48525 5.292 1.52925 5.896 1.61725 6.384C1.71325 6.872 1.90125 7.264 2.18125 7.56C2.46925 7.856 2.88525 8.004 3.42925 8.004C3.96525 8.004 4.37325 7.856 4.65325 7.56C4.94125 7.264 5.12925 6.872 5.21725 6.384C5.31325 5.896 5.36125 5.292 5.36125 4.572ZM8.04841 8.124C9.06441 7.308 9.86041 6.64 10.4364 6.12C11.0124 5.592 11.4964 5.044 11.8884 4.476C12.2884 3.9 12.4884 3.336 12.4884 2.784C12.4884 2.264 12.3604 1.856 12.1044 1.56C11.8564 1.256 11.4524 1.104 10.8924 1.104C10.3484 1.104 9.92441 1.276 9.62041 1.62C9.32441 1.956 9.16441 2.408 9.14041 2.976H8.08441C8.11641 2.08 8.38841 1.388 8.90041 0.9C9.41241 0.411999 10.0724 0.167999 10.8804 0.167999C11.7044 0.167999 12.3564 0.395999 12.8364 0.852C13.3244 1.308 13.5684 1.936 13.5684 2.736C13.5684 3.4 13.3684 4.048 12.9684 4.68C12.5764 5.304 12.1284 5.856 11.6244 6.336C11.1204 6.808 10.4764 7.36 9.69241 7.992H13.8204V8.904H8.04841V8.124Z" fill="#FB1010" />
                        </svg>
                        <div className='flex flex-col gap-2'>
                            <h1 className='md:text-xl text-base'>Excessive Knee Load</h1>
                            <p className='hidden md:block'>Prolonged sitting can result in muscle stiffness, reduced flexibility, and weakened strength, making it harder to rise from a seated position.</p>
                        </div>
                    </span>
                    <div className="md:flex items-start hidden">
                        <svg width="auto" height="1" viewBox="0 0 738 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="738" y2="0.5" stroke="black" />
                        </svg>
                    </div>
                    <span className='flex flex-row gap-4 items-center'>
                        <Image src='/Home/3.png' width={20} height={20} alt='logo' className='w-8 h-8 md:block hidden' />
                        <svg className='md:hidden' width="18" height="15" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.323219 4.572C0.323219 3.196 0.547219 2.124 0.995219 1.356C1.44322 0.58 2.22722 0.192 3.34722 0.192C4.45922 0.192 5.23922 0.58 5.68722 1.356C6.13522 2.124 6.35922 3.196 6.35922 4.572C6.35922 5.972 6.13522 7.06 5.68722 7.836C5.23922 8.612 4.45922 9 3.34722 9C2.22722 9 1.44322 8.612 0.995219 7.836C0.547219 7.06 0.323219 5.972 0.323219 4.572ZM5.27922 4.572C5.27922 3.876 5.23122 3.288 5.13522 2.808C5.04722 2.32 4.85922 1.928 4.57122 1.632C4.29122 1.336 3.88322 1.188 3.34722 1.188C2.80322 1.188 2.38722 1.336 2.09922 1.632C1.81922 1.928 1.63122 2.32 1.53522 2.808C1.44722 3.288 1.40322 3.876 1.40322 4.572C1.40322 5.292 1.44722 5.896 1.53522 6.384C1.63122 6.872 1.81922 7.264 2.09922 7.56C2.38722 7.856 2.80322 8.004 3.34722 8.004C3.88322 8.004 4.29122 7.856 4.57122 7.56C4.85922 7.264 5.04722 6.872 5.13522 6.384C5.23122 5.896 5.27922 5.292 5.27922 4.572ZM8.07437 2.508C8.13037 1.772 8.41437 1.196 8.92638 0.779999C9.43837 0.363999 10.1024 0.155999 10.9184 0.155999C11.4624 0.155999 11.9304 0.256 12.3224 0.456C12.7224 0.648 13.0224 0.912 13.2224 1.248C13.4304 1.584 13.5344 1.964 13.5344 2.388C13.5344 2.884 13.3904 3.312 13.1024 3.672C12.8224 4.032 12.4544 4.264 11.9984 4.368V4.428C12.5184 4.556 12.9304 4.808 13.2344 5.184C13.5384 5.56 13.6904 6.052 13.6904 6.66C13.6904 7.116 13.5864 7.528 13.3784 7.896C13.1704 8.256 12.8584 8.54 12.4424 8.748C12.0264 8.956 11.5264 9.06 10.9424 9.06C10.0944 9.06 9.39837 8.84 8.85437 8.4C8.31037 7.952 8.00637 7.32 7.94237 6.504H8.99837C9.05437 6.984 9.25037 7.376 9.58637 7.68C9.92238 7.984 10.3704 8.136 10.9304 8.136C11.4904 8.136 11.9144 7.992 12.2024 7.704C12.4984 7.408 12.6464 7.028 12.6464 6.564C12.6464 5.964 12.4464 5.532 12.0464 5.268C11.6464 5.004 11.0424 4.872 10.2344 4.872H9.95837V3.96H10.2464C10.9824 3.952 11.5384 3.832 11.9144 3.6C12.2904 3.36 12.4784 2.992 12.4784 2.496C12.4784 2.072 12.3384 1.732 12.0584 1.476C11.7864 1.22 11.3944 1.092 10.8824 1.092C10.3864 1.092 9.98637 1.22 9.68237 1.476C9.37837 1.732 9.19837 2.076 9.14237 2.508H8.07437Z" fill="#FB1010" />
                        </svg>
                        <div className='flex flex-col gap-2'>
                            <h1 className='md:text-xl text-base'>Problems due to long sitting hours</h1>
                            <p className='hidden md:block'>Prolonged sitting can result in muscle stiffness, reduced flexibility, and weakened strength, making it harder to rise from a seated position.</p>
                        </div>
                    </span>
                    <div className="md:flex items-start hidden">
                        <svg width="auto" height="1" viewBox="0 0 738 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="738" y2="0.5" stroke="black" />
                        </svg>
                    </div>    
                </div>
                <div className="md:hidden items-start flex">
                        <svg width="400" height="1" viewBox="0 0 738 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="738" y2="0.5" stroke="black" />
                        </svg>
                    </div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-[13vw] w-half md:mx-12 mx-4 md:my-0 gap-[3vw] text-base md:mt-12 mt-5'>
                <span className='md:font-extrabold font-bold text-lg md:text-4xl lg:text-5xl md:my-20 my-0'>How are we solving this problem?</span>
                <div className='flex flex-col gap-4 md:gap-8'>
                    <span className='md:text-4xl font-semibold text-lg sm:text-3xl'>STAND AT <span className='text-red-500'>EASE</span>
                    </span>
                    <span className='md:text-lg font-normal'>Stand at Ease is an assistive chair for the elderly who suffer from knee joint problem and face difficulty while raising up from the sitting posture.</span>
                    <div className='flex flex-row md:gap-10 gap-2'>
                        <div className='shadow-lg'> <Image src="/Home/home-1.png" className='' width={200} height={200} alt="logo"></Image></div>
                        <div className='shadow-lg'> <Image src="/Home/home-2.png" className='' width={200} height={200} alt="logo"></Image></div>
                        <div className='shadow-lg'> <Image src="/Home/home-3.png" className='' width={200} height={200} alt="logo"></Image></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
