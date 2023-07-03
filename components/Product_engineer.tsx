/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import Image from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Product_Engineer = () => {
    return (
        <div className="pt-32 ">
            <div className="hidden md:flex flex-col gap-10 ">
                <div className="font-extrabold text-3xl flex justify-center">
                    Our Advisory Board
                </div>
                <div className="text-xl mx-20">
                    We are extremely grateful to the learned professors who have helped and guided us on several occasions, enriching us with their knowledge and ideologies.
                </div>
                <div className="grid md:grid-cols-3 grid-cols-2 md:mx-28 ml-12 mr-8 gap-10">
                    <div className="flex flex-col gap-6">
                        <Image src="/Team/team-1.png" width={300} height={300} alt="logo"></Image>
                        <p className="text-2xl font-extrabold">Prof.G .K Ananthasuresh</p>
                        <p className="text-lg"> Dean, Division of Mechanical Sciences, IISc, Bangalore</p>
                    </div>
                    <div className="flex flex-col gap-6 mt-2">
                        <img src="/Team/team-2.png" width={350} height={350} alt="logo" />
                        <p className="text-2xl font-extrabold">Dr. Medha Rao</p>
                        <p className="text-lg"> Principal and Dean, M.S. Ramaiah Medical College</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Image src="/Team/team-3.png" className='' width={300} height={300} alt="logo"></Image>
                        <p className="text-2xl font-extrabold">Dr. Pretesh. R. Kiran</p>
                        <p className="text-lg"> Associate Professor at Department of Community Health, St John's Medical College, Bangalore</p>
                    </div>
                </div>
            </div>
            <div className="font-extrabold md:text-3xl text-xl flex md:justify-center mx-12 mt-10">
                Want to be a part of this revolution? We’re hiring!
            </div>
            <div className="flex md:flex-row flex-col md:pb-12 mx-12 md:gap-[38vw] gap-12 md:mx-28 mt-10">
                <div className="flex flex-row gap-4">
                    <div className="flex items-center">
                        <svg width="40" height="2" viewBox="0 0 81 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="81" y2="1" stroke="black" stroke-width="2" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-xl">Product Engineer Intern</span>
                        <span>Location: Bangalore, India</span>
                        <div className="flex justify-start">
                            <Link href="/product_design">
                                <button className="px-2 py-1 rounded-md bg-red-600 text-white">Full-Time</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex flex-col md:pb-12 mx-12 md:gap-[2vw] gap-4 md:mx-28 md:mt-2 mt-12">
                <span className="md:text-3xl underline md:no-underline text-2xl font-bold">Requirements</span>
                <div className="flex flex-row gap-2 items-center">
                    <FiberManualRecordIcon className="h-4" />
                    <span className="md:text-lg text-md font-regular">Copy In or beyond 4th semester of BTech/Bdes </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <FiberManualRecordIcon className="h-4" />
                    <span className="md:text-lg text-md font-regular">Basic experience with CAD </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <FiberManualRecordIcon className="h-4" />
                    <span className="md:text-lg text-md font-regular">Presentation of concepts</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <FiberManualRecordIcon className="h-4" />
                    <span className="md:text-lg text-md font-regular">Willingness to dive into design decision methodologies and framework creation</span>
                </div><div className="flex flex-row gap-2 items-center">
                    <FiberManualRecordIcon className="h-4" />
                    <span className="md:text-lg text-md font-regular">Willing to talk to users, distributors, etc. and carry out market research both on and off field </span>
                </div><div className="flex flex-row gap-2 items-center">
                    <FiberManualRecordIcon className="h-4" />
                    <span className="md:text-lg text-md font-regular">Will get to learn how to develop, test and correct design intuition</span>
                </div>
            </div>
            <div className="flex flex-col md:pb-12 mx-12 md:gap-[2vw] gap-4 md:mx-28 md:mt-2 mt-12">
                <span className="md:text-3xl text-2xl font-bold md:no-underline underline">PLACE</span>
                <span className="md:text-xl text-lg font-regular">Translead Medtech Pvt Ltd,Incubated @ CPDMED TBI,MedTech & Geriatric Healthcare TechnologyBusiness Incubator, IISc, Bangalore</span>
            </div>
            <div className="flex flex-col md:pb-12 mx-12 md:gap-[2vw] gap-4 md:mx-28 md:mt-2 mt-8">
                <span className="md:text-3xl text-2xl md:no-underline underline font-bold">CONTACT</span>
                <span className="md:text-xl text-lg font-regular">Email: info@transleadmedtech.com <br />
                    Phone: +91-86181 13553
                </span>
            </div>
            <div className="mt-10 mx-32 hidden md:block">
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
            <div className=" mx-8 mt-10">
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
                            <ArrowBackIosIcon className="text-black w-3" />
                            <ArrowBackIosIcon className="text-black w-3" />
                            Go back to view the Open Positions
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Product_Engineer;