/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FlipCard from "./FlipCard";

const Team = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="pt-24 md:pt-32 flex flex-col md:gap-10 gap-4">
            <div className="md:font-extrabold font-bold text-2xl md:text-4xl flex md:justify-center justify-center team-bg-1">
                Our Advisors
            </div>
            <div className="text-xl mx-48 text-center hidden md:block">
                We are extremely grateful to the learned professors who have helped and guided us on several occasions, enriching us with their knowledge and ideologies.
            </div>
            <div className="md:grid md:grid-cols-4 flex flex-col md:mx-[89px] items-center md:gap-[91px] gap-72 mt-32 mb-40 md:my-32">
                <FlipCard name={'Prof.G .K Ananthasuresh'} position={'Dean, Division of Mechanical Sciences, Indian Institute of Science, Bangalore'} desc1={'B.Tech degree from the Indian Institute of Technology, Chennai, India in 1989.'} desc2={'PhD from the University of Michigan, Ann Arbor, in 1994'} desc3={'Postdoctoral Research Associate with the Massachusetts Institute of Technology, Cambridge 1995-96'} frontName={'Prof.G .K Ananthasuresh'} frontPosition={'Dean, Division of Mechanical Sciences, IISc, Bangalore'}/>
                <FlipCard name={'Dr. Jeevan Prakash'} position={'Gynecologist , Bangalore'} frontName={'Dr. Jeevan Prakash'} frontPosition={'Gynecologist , Bangalore'} desc1={`Associate Professor at Department of Community Health, St Johns Medical College, Bangalore`} desc2={`She has been a member of International Advisory Board and was actively involved in reviews for Davidson's Textbook of Medicine`} desc3={`He is currently serving as an Associate Professor at Dept of Community Health, St John's Medical College, Bangalore`} />
                <FlipCard name={'Dr. Medha Rao'} position={'Principal and Dean, M.S. Ramaiah Medical College'} desc1={'Dr. Medha Rao brings over 37 years of experience of teaching and consulting in medicine'} desc2={`She has been a member of International Advisory Board and was actively involved in reviews for Davidson's Textbook of Medicine`} desc3={'Dr. Rao has a special interest in teaching and research in Geriatrics care, an emerging area of public health relevance in India and most developing countries.'} frontName={'Dr. Medha Rao'} frontPosition={'Principal and Dean, M.S. Ramaiah Medical College'}/>
                <FlipCard name={'Dr. Pretesh. R. Kiran'} position={'Associate Professor at Department of Community Health, St Johns Medical College, Bangalore'} desc1={`Degrees MBBS, MD, DGM in Community Health, Geriatrics from KIMS and St John's Medical College, Bangalore.`} desc2={'He is a Geriatrician and a specialist for Dry Eyes, Reflux Esophagitis, Pneumonitis with 17 Years of Experience.'} desc3={`He is currently serving as an Associate Professor at Dept of Community Health, St John's Medical College, Bangalore.`} frontName={'Dr. Pretesh. R. Kiran'} frontPosition={'Associate Professor at Department of Community Health, St Johns Medical College, Bangalore'}/>
            </div>
            <div className="font-bold flex md:text-[40px] text-xl justify-center md:mx-0 mx-4 items-center text-center md:pt-20 pt-8 team-bg-2">
                Want to be a part of this revolution? We’re hiring!
            </div>
            <div className="flex md:flex-row flex-col md:pb-12 md:gap-[200px] gap-4 md:mx-[240px] justify-center items-center mx-4">
                <div className="flex flex-row gap-4">
                    <div className="flex justify-center items-center">
                        <Link href="/product_design">
                            <button className="px-4 py-2.5 md:text-base text-sm rounded-md bg-red-500 text-white shadow-xl">Full-Time</button>
                        </Link>
                    </div>
                    <div className="flex flex-col md:gap-2 gap-1">
                        <span className="font-semibold text-base md:text-2xl">Product Design Intern</span>
                        <span className="text-sm md:text-xl">Location: Bangalore, India</span>

                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex justify-center items-center">
                        <Link href="/product_engineer">
                            <button className="px-4 py-2.5 md:text-base text-sm rounded-md bg-red-500 text-white shadow-xl">Full-Time</button>
                        </Link>
                    </div>
                    <div className="flex flex-col md:gap-2 gap-1">
                        <span className="font-semibold text-base md:text-2xl">Asst. Product Engineer</span>
                        <span className="text-sm md:text-xl">Location: Bangalore, India</span>
                    </div>
                </div>
            </div>
            <div className="font-medium md:font-bold md:text-[26px] text-base flex justify-center text-center md:mt-0 mt-5 mx-4">
                <span>Could not find your position? Submit this form and we will get back to you sure!</span>
            </div>
            <div className="mt-5 md:flex hidden ml-[280px] mr-[150px]">
                <form >
                    <div className="grid grid-cols-2 gap-1">
                        <div className="mb-8">
                            <input type="text" className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-4 border border-[#64AFAC]" placeholder="First Name" required />
                        </div>
                        <div className="mb-6">
                            <input type="text" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-4" placeholder="Last Name" required />
                        </div>
                    </div>

                    <div className="mb-6">
                        <input type="email" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-4" placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <input type="text" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-4" placeholder="Position" required />
                    </div>
                    <div className="mb-6">
                        <input type="url" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-4" placeholder="Resume" required />
                    </div>

                    <div className="mx-[350px] mt-8">
                        <button type="submit" className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-20 py-2.5  shadow-xl">Submit</button>
                    </div>
                </form>
            </div>
            <div className="md:hidden mx-6 mt-4">
                <div className='w-full'>
                    <form>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Full Name" required />
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Last Name" required />
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Email" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Position" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="url" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Resume" required />
                        </div>
                        <div className='text-center mt-6'>
                            <button type="submit" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-4 shadow-xl py-2.5 text-center">Submit!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Team;