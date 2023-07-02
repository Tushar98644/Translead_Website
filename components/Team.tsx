/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Team = () => {
    return (
        <div className="pt-32 flex flex-col gap-10">
            <div className="font-extrabold text-3xl flex justify-center">
                Our Advisory Board
            </div>
            <div className="text-xl mx-20">
                We are extremely grateful to the learned professors who have helped and guided us on several occasions, enriching us with their knowledge and ideologies.
            </div>
            <div className="grid grid-cols-3 mx-28 gap-10">
                <div className="flex flex-col gap-6">
                    <Image src="/Team/team-1.png" className='' width={300} height={300} alt="logo"></Image>
                    <p className="text-2xl font-extrabold">Prof.G .K Ananthasuresh</p>
                    <p className="text-lg"> Dean, Division of Mechanical Sciences, IISc, Bangalore</p>
                </div>
                <div className="flex flex-col gap-6">
                    <Image src="/Team/team-2.png" className='' width={335} height={400} alt="logo"></Image>
                    <p className="text-2xl font-extrabold">Dr. Medha Rao</p>
                    <p className="text-lg"> Principal and Dean, M.S. Ramaiah Medical College</p>
                </div>
                <div className="flex flex-col gap-6">
                    <Image src="/Team/team-3.png" className='' width={300} height={300} alt="logo"></Image>
                    <p className="text-2xl font-extrabold">Dr. Pretesh. R. Kiran</p>
                    <p className="text-lg"> Associate Professor at Department of Community Health, St John's Medical College, Bangalore</p>
                </div>
            </div>
            <div className="font-extrabold text-3xl flex justify-center mt-10">
                Want to be a part of this revolution? We’re hiring!
            </div>
            <div className="grid grid-cols-2 gap-60 mx-48">
                <div className="flex flex-row gap-4">
                    <div className="flex items-center">
                        <svg width="81" height="2" viewBox="0 0 81 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="81" y2="1" stroke="black" stroke-width="2" />
                        </svg>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span>Product Design Intern</span>
                        <span>Location: Bangalore, India</span>
                        <div className="flex justify-start">
                            <button className="px-2 py-1 rounded-md bg-red-600 text-white">Full-Time</button>
                        </div>
                    </div>

                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex items-center">
                        <svg width="81" height="2" viewBox="0 0 81 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="81" y2="1" stroke="black" stroke-width="2" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Asst. Product Engineer</span>
                        <span>Location: Bangalore, India</span>
                        <div className="flex justify-start">
                            <button className="px-2 py-1 rounded-md bg-red-600 text-white">Full-Time</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="font-medium text-2xl mx-32 flex justify-start mt-10">
                <span>Could not find your position?  Submit this form and we will get back to you sure!</span>
            </div>
            <div className="mt-10 mx-32">
                <form >
                    <div className="grid grid-cols-2 gap-20">
                        <div className="mb-12">
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="First Name" required />
                        </div>
                        <div className="mb-6">
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Last Name" required />
                        </div>
                    </div>

                    <div className="mb-6">
                        <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Position" required />
                    </div>
                    <div className="mb-6">
                        <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="college" required />
                    </div>
                  
<div className="text-center mt-8">
<button type="submit" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center">Submit</button>

</div>
                </form>
            </div>

        </div>
    );
}

export default Team;