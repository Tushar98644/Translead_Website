/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import Image from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FlipCard from "./FlipCard";

const Product_Design = () => {
    return (
        <div className="pt-24 md:pt-32">
            <div className="md:flex flex-col gap-10 role-bg-2">
                <div className="md:font-extrabold font-bold md:text-4xl text-xl flex justify-center">
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
            </div>
            <div className="font-bold md:text-[40px] text-xl text-center flex justify-center md:pt-20 pt-8 role-bg-1">
                Want to be a part of this revolution? We’re hiring!
            </div>
            <div className="flex md:flex-row flex-col md:pb-12 md:gap-[200px] gap-4 justify-center md:mx-4 mx-12 mt-8">
                <div className="flex flex-row gap-4">
                    <div className="flex justify-center items-center">
                        <Link href="/product_design">
                            <button className="md:px-4 md:py-2.5 px-4 py-2.5 md:text-base text-sm rounded-md bg-red-500 text-white shadow-xl">Full-Time</button>
                        </Link>
                    </div>
                    <div className="flex flex-col md:gap-2 gap-1">
                        <span className="font-semibold text-base md:text-2xl">Product Design Intern</span>
                        <span className="text-sm md:text-xl">Location: Bangalore, India</span>

                    </div>
                </div>
            </div>
            <div className="md:grid grid-cols-2 flex flex-col md:pb-12 md:gap-12 gap-2 md:ml-[240px] md:mr-[120px] md:mt-2 mt-6">
                <div className="flex flex-col gap-2 md:mx-0 mx-6">
                    <span className="md:text-2xl underline md:no-underline text-base font-bold">Requirements</span>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="bg-black w-2 h-2 rounded-full">
                        </div>
                        <span className="md:text-lg text-sm font-regular">Copy In or beyond 4th semester of BTech/Bdes </span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                    <div className="bg-black w-2 h-2 rounded-full">
                        </div>
                                   <span className="md:text-lg text-sm font-regular">Basic experience with CAD </span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                    <div className="bg-black w-2 h-2 rounded-full">
                        </div>
                        <span className="md:text-lg text-sm font-regular">Presentation of concepts</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                    <div className="bg-black w-2.5 h-2 rounded-full">
                        </div>
                        <span className="md:text-lg text-sm font-regular">Willingness to dive into design decision methodologies and framework creation</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center ">
                    <div className="bg-black w-3 h-2 rounded-full">
                        </div>
                        <span className="md:text-lg text-sm font-regular">Willing to talk to users, distributors, etc. and carry out market research both on and off field </span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                    <div className="bg-black w-2 h-2 rounded-full">
                        </div>
                        <span className="md:text-lg text-sm font-regular">Will get to learn how to develop, test and correct design intuition</span>
                    </div>
                </div>
                <div className="flex flex-col gap-0">
                    <div className="flex flex-col md:pb-12 mx-6 md:gap-[1vw] gap-2 md:mt-2 mt-4">
                        <span className="md:text-2xl text-base font-bold md:no-underline underline">PLACE</span>
                        <span className="md:text-lg text-sm font-regular">Translead Medtech Pvt Ltd,Incubated @ CPDMED TBI,MedTech & Geriatric Healthcare TechnologyBusiness Incubator, IISc, Bangalore</span>
                    </div>
                    <div className="flex flex-col md:pb-12 mx-6 md:gap-[1vw] gap-2 md:mt-2 mt-4">
                        <span className="md:text-2xl text-base md:no-underline underline font-bold">CONTACT</span>
                        <span className="md:text-lg text-sm font-regular">Email: info@transleadmedtech.com <br />
                            Phone: +91-86181 13553
                        </span>
                    </div>
                </div>
            </div>
             <div className="mt-5 block md:ml-[240px] md:mr-[150px] md:mx-0 mx-6">
                <form >
                    <div className="md:grid grid-cols-2 flex flex-col md:gap-1 gap-0">
                        <div className="mb-8">
                            <input type="text" className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-5/6 w-full md:p-4 p-2.5 border border-[#64AFAC]" placeholder="First Name" required />
                        </div>
                        <div className="mb-6">
                            <input type="text" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-5/6 w-full md:p-4 p-2.5" placeholder="Last Name" required />
                        </div>
                    </div>

                    <div className="mb-6">
                        <input type="email" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-11/12 w-full md:p-4 p-2.5" placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <input type="number" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-11/12 w-full md:p-4 p-2.5" placeholder="Phone" required />
                    </div>
                    <div className="mb-6">
                        <input type="url" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-11/12 w-full md:p-4 p-2.5" placeholder="Resume" required />
                    </div>
                    <div className="mb-6">
                        <input type="url" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-11/12 w-full md:p-4 p-2.5" placeholder="Portfolio link" required />
                    </div> 
                    <div className="mb-6">
                        <input type="text" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-11/12 w-full md:p-4 p-2.5" placeholder="What is your current location?" required />
                    </div>
                    <div className="mb-6">
                        <input type="text" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-11/12 w-full md:p-4 p-2.5" placeholder="What is your highest qualification ? please mention the year and grade too." required />
                    </div> 
                    <div className="mb-6">
                        <input type="text" className="shadow-sm bg-gray-50 border border-[#64AFAC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-11/12 w-full md:p-4 p-2.5" placeholder="What is your notice period?" required />
                    </div> 

                    <div className="text-center mt-8 md:mr-20">
                        <button type="submit" className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center o">Submit Your application</button>

                    </div>
                </form>
            </div>
            <div className="mx-6 mt-4">
                <div className='w-full'>
                    <div className='text-start md:mt-12 mt-6 md:mx-24 md:text-lg'>
                        <Link href="/team">
                            <ArrowBackIosIcon className="text-black md:w-3 w-2" />
                            <ArrowBackIosIcon className="text-black md:w-3 w-2" />
                            <span className="text-[#0A66C2]">Go back to view the Open Positions</span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Product_Design;