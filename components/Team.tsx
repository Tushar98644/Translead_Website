/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const Team = () => {
    return (
        <div className="pt-24 md:pt-32 flex flex-col md:gap-10 gap-4">
            <div className="md:font-extrabold font-bold text-lg md:text-3xl flex md:justify-center justify-center">
                Our Advisory Board
            </div>
            <div className="text-xl mx-10 hidden md:block">
                We are extremely grateful to the learned professors who have helped and guided us on several occasions, enriching us with their knowledge and ideologies.
            </div>
            <div className="md:grid md:grid-cols-3 flex flex-col md:mx-20 items-center md:gap-36 gap-8">
                <div className="flex flex-col items-center gap-0">
                    <Image src="/Team/team-1.png"
                        className="w-72 h-72 sm:w-64 sm:h-70 md:w-80 md:h-48 lg:w-80 lg:h-80"
                        alt="logo" width={400} height={400}
                    />
                    <p className="md:text-xl md:font-extrabold text-sm font-semibold mt-8">Prof.G .K Ananthasuresh</p>
                    <p className="md:text-base text-xs mx-4"> Dean, Division of Mechanical Sciences, IISc, Bangalore</p>
                </div>
                <div className="flex flex-col items-center gap-0">
                <Image src="/Team/team-2.png"
                        className="w-72 h-72 sm:w-64 sm:h-70 md:w-80 md:h-48 lg:w-80 lg:h-80"
                        alt="logo" width={400} height={400}
                    />                    <p className="md:text-xl md:font-extrabold text-sm font-semibold mt-8">Dr. Medha Rao</p>
                    <p className="md:text-base text-xs mx-4"> Principal and Dean, M.S. Ramaiah Medical College</p>
                </div>
                <div className="flex flex-col items-center gap-0">
                <Image src="/Team/team-3.png"
                        className="w-72 h-72 sm:w-64 sm:h-70 md:w-80 md:h-48 lg:w-80 lg:h-80"
                        alt="logo" width={400} height={400}
                    />                    <p className="text-center md:text-xl md:font-extrabold text-sm font-semibold mt-8">Dr. Pretesh. R. Kiran</p>
                    <p className="text-center md:text-base text-xs mx-4"> Associate Professor at Department of Community Health, St John's Medical College, Bangalore</p>
                </div>

            </div>
            <div className="md:font-extrabold font-bold md:text-3xl text-lg flex md:justify-center md:mx-12 md:mt-4 mt-2 mx-4">
                Want to be a part of this revolution? We’re hiring!
            </div>
            <div className="flex md:flex-row flex-col md:pb-6 md:gap-[30vw] gap-4 md:mx-36 md:mt-6 mx-4">
                <div className="flex flex-row gap-4">
                    <div className="md:flex items-center hidden">
                        <svg width="81" height="2" viewBox="0 0 81 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="81" y2="1" stroke="black" stroke-width="2" />
                        </svg>
                    </div>
                    <div className="items-center flex md:hidden">
                        <svg width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="17" y2="1" stroke="black" stroke-width="2" />
                        </svg>
                    </div>
                    <div className="flex flex-col md:gap-2 gap-1">
                        <span className="font-semibold text-base md:text-2xl">Product Design Intern</span>
                        <span className="text-sm md:text-xl">Location: Bangalore, India</span>
                        <div className="flex justify-start">
                            <Link href="/product_design">
                                <button className="md:px-2 md:py-1 px-2 py-0.5 md:text-base text-sm rounded-md bg-red-600 text-white">Full-Time</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="items-center flex md:hidden">
                        <svg width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="17" y2="1" stroke="black" stroke-width="2" />
                        </svg>
                    </div>
                    <div className="md:flex items-center hidden">
                        <svg width="81" height="2" viewBox="0 0 81 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="81" y2="1" stroke="black" stroke-width="2" />
                        </svg>
                    </div>
                    <div className="flex flex-col md:gap-2 gap-1">
                        <span className="font-semibold text-base md:text-2xl">Asst. Product Engineer</span>
                        <span className="text-sm md:text-xl">Location: Bangalore, India</span>
                        <div className="flex justify-start">
                            <Link href="/product_engineer">
                                <button className="md:px-2 md:py-1 px-2 py-0.5 md:text-base text-sm rounded-md bg-red-600 text-white">Full-Time</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="font-medium md:font-bold md:text-2xl text-base md:mx-20 flex justify-start md:mt-0 mt-5 mx-4">
                <span>Could not find your position? Submit this form and we will get back to you sure!</span>
            </div>
            <div className="mt-5 mx-24 hidden md:block">
                <form >
                    <div className="grid grid-cols-2 gap-20">
                        <div className="mb-12">
                            <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="First Name" required />
                        </div>
                        <div className="mb-6">
                            <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Last Name" required />
                        </div>
                    </div>

                    <div className="mb-6">
                        <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Position" required />
                    </div>
                    <div className="mb-6">
                        <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="college" required />
                    </div>

                    <div className="text-center mt-8">
                        <button type="submit" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center">Submit</button>

                    </div>
                </form>
            </div>
            <div className="md:hidden mx-6">
                <div className='w-full'>
                    <form>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Full Name" required />
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Position" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="number" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Phone" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="url" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Resume" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="url" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Linkedin" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <textarea className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Any other comments" rows={5} required />
                        </div>
                        <div className='text-center mt-12'>
                            <button type="submit" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center">Seize your future now!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Team;