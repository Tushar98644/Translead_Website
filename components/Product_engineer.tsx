/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import Image from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Product_Engineer = () => {
    return (
        <div className="pt-16 md:pt-32">
            <div className="hidden md:flex flex-col gap-10">
                <div className="font-extrabold text-3xl flex justify-center">
                    Our Advisory Board
                </div>
                <div className="text-xl mx-10">
                    We are extremely grateful to the learned professors who have helped and guided us on several occasions, enriching us with their knowledge and ideologies.
                </div>
                <div className="grid md:grid-cols-3 grid-cols-2 mx-20 gap-36">
                    <div className="flex flex-col gap-0">
                        <Image src="/Team/team-1.png" width={300} height={300} alt="logo"></Image>
                        <p className="text-xl font-extrabold mt-6">Prof.G .K Ananthasuresh</p>
                        <p className="text-base"> Dean, Division of Mechanical Sciences, IISc, Bangalore</p>
                    </div>
                    <div className="flex flex-col gap-0">
                        <img src="/Team/team-2.png" width={350} height={350} alt="logo" />
                        <p className="text-xl font-extrabold mt-6">Dr. Medha Rao</p>
                        <p className="text-base"> Principal and Dean, M.S. Ramaiah Medical College</p>
                    </div>
                    <div className="flex flex-col gap-0">
                        <Image src="/Team/team-3.png" className='' width={300} height={300} alt="logo"></Image>
                        <p className="text-xl font-extrabold mt-6">Dr. Pretesh. R. Kiran</p>
                        <p className="text-base"> Associate Professor at Department of Community Health, St John's Medical College, Bangalore</p>
                    </div>
                </div>
            </div>
            <div className="md:font-extrabold font-bold md:text-3xl text-lg flex md:justify-center md:mx-12 mx-6 md:mt-10 mt-6">
                Want to be a part of this revolution? We’re hiring!
            </div>
            <div className="flex md:flex-row flex-col md:pb-12 mx-6 md:gap-[38vw] gap-12 md:mx-28 md:mt-10 mt-2">
                <div className="flex flex-row gap-4">
                    <div className="md:flex items-center hidden">
                        <svg width="40" height="2" viewBox="0 0 81 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="81" y2="1" stroke="black" stroke-width="2" />
                        </svg>
                    </div>
                    <div className="items-center flex md:hidden">
                        <svg width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="17" y2="1" stroke="black" stroke-width="2" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-0 md:gap-1">
                        <span className="font-bold md:text-2xl text-base mt-2 md:mt-0">Product Engineer Intern</span>
                        <span className="text-sm md:text-lg font-normal">Location: Bangalore, India</span>
                        <div className="flex justify-start">
                            <Link href="/product_design">
                                <button className="md:px-2 md:py-1 px-2 py-0.5 md:text-base text-sm rounded-md bg-red-600 text-white">Full-Time</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:pb-12 mx-6 md:gap-[1.6vw] gap-2 md:mx-28 md:mt-2 mt-6">
                <span className="md:text-3xl underline md:no-underline text-base font-bold">Requirements</span>
                <div className="flex flex-row gap-2 items-center">
                    <div className="bg-black w-1.5 h-1.5 rounded-full md:hidden">
                    </div>
                    <div className="hidden md:block">
                        <FiberManualRecordIcon className="text-black md:w-3 w-1" />
                    </div>
                    <span className="md:text-lg text-sm font-regular">Copy In or beyond 4th semester of BTech/Bdes </span>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <div className="bg-black w-1.5 h-1.5 rounded-full md:hidden ">
                    </div>       <div className="hidden md:block">
                        <FiberManualRecordIcon className="text-black md:w-3 w-1" />
                    </div>              <span className="md:text-lg text-sm font-regular">Basic experience with CAD </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <div className="bg-black w-1.5 h-1.5 rounded-full md:hidden">
                    </div>
                    <div className="hidden md:block">
                        <FiberManualRecordIcon className="text-black md:w-3 w-1" />
                    </div>
                    <span className="md:text-lg text-sm font-regular">Presentation of concepts</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <div className="bg-black w-[2.5vw] h-1.5 rounded-full md:hidden">
                    </div>
                    <div className="hidden md:block">
                        <FiberManualRecordIcon className="text-black md:w-3 w-1" />
                    </div>
                    <span className="md:text-lg text-sm font-regular">Willingness to dive into design decision methodologies and framework creation</span>
                </div>
                <div className="flex flex-row gap-2 items-center ">
                    <div className="bg-black w-2.5 h-1.5 rounded-full md:hidden">
                    </div>
                    <div className="hidden md:block">
                        <FiberManualRecordIcon className="text-black md:w-3 w-1" />
                    </div>
                    <span className="md:text-lg text-sm font-regular">Willing to talk to users, distributors, etc. and carry out market research both on and off field </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <div className="bg-black w-2 h-1.5 rounded-full md:hidden">
                    </div>
                    <div className="hidden md:block">
                        <FiberManualRecordIcon className="text-black md:w-3 w-1" />
                    </div>
                    <span className="md:text-lg text-sm font-regular">Will get to learn how to develop, test and correct design intuition</span>
                </div>
            </div>
            <div className="flex flex-col md:pb-12 mx-6 md:gap-[1vw] gap-2 md:mx-28 md:mt-2 mt-4">
                <span className="md:text-3xl text-base font-bold md:no-underline underline">PLACE</span>
                <span className="md:text-xl text-sm font-regular">Translead Medtech Pvt Ltd,Incubated @ CPDMED TBI,MedTech & Geriatric Healthcare TechnologyBusiness Incubator, IISc, Bangalore</span>
            </div>
            <div className="flex flex-col md:pb-12 mx-6 md:gap-[1vw] gap-2 md:mx-28 md:mt-2 mt-4">
                <span className="md:text-3xl text-base md:no-underline underline font-bold">CONTACT</span>
                <span className="md:text-xl text-sm font-regular">Email: info@transleadmedtech.com <br />
                    Phone: +91-86181 13553
                </span>
            </div>
            <div className="mt-4 mx-32 hidden md:block">
                <form >
                    <div className="grid grid-cols-2 gap-20">
                        <div className="mb-12">
                            <input type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="First Name" required />
                        </div>
                        <div className="mb-6">
                            <input type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Last Name" required />
                        </div>
                    </div>

                    <div className="mb-6">
                        <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <input type="number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Phone" required />
                    </div>
                    <div className="mb-6">
                        <input type="url" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Resume" required />
                    </div>
                    <div className="mb-6">
                        <input type="url" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Portfolio Link" required />
                    </div>
                    <div className="mb-6">
                        <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="What is your current location?*" required />
                    </div>
                    <div className="mb-6">
                        <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="What is your current qualification? Mention year and grade.*" required />
                    </div>
                    <div className="mb-6">
                        <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="What is your notice period?*" required />
                    </div>
                    <div className="text-center mt-8">
                        <button type="submit" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center">Submit</button>

                    </div>
                </form>
            </div>
            <div className="mx-6 mt-4">
                <div className='w-full'>
                    <form className="md:hidden">
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Full Name" required />
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="number" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Phone" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="url" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Resume" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="url" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Portfolio Link" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="What is your current location?*" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="What is your current qualification? Mention year and grade.*" required />
                        </div><div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="What is your notice period?*" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <textarea className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Any other comments" rows={5} required />
                        </div>
                        <div className='text-center mt-12'>
                            <button type="submit" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center">Submit your application</button>
                        </div>
                    </form>
                    <div className='text-start mt-12 md:mx-24 md:text-lg'>
                        <Link href="/team">
                            <ArrowBackIosIcon className="text-black md:w-5 w-3" />
                            <ArrowBackIosIcon className="text-black md:w-5 w-3" />
                            Go back to view the Open Positions
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Product_Engineer;