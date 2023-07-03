import { useState } from 'react';
import Map from './Map'

const Contact = () => {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState("Send");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    
    return (
        <div className="pt-36 flex flex-col sm:mx-24 mx-6 gap-4">
            <div className="flex md:flex-row flex-col md:gap-20 gap-8">
                <div className="flex flex-col gap-2">
                    <div className="sm:font-extrabold font-bold sm:text-3xl text-lg  flex justify-start">
                        Contact
                    </div>
                    <div className="text-xs sm:text-lg">
                        For any inquiries about us and the work we do, please use the form on the right and drop a note to us. We will be sure to get back to you as soon as we can.
                    </div>
                </div>
                <div className='w-full'>
                    <form onSubmit={()=>console.log('hello')}>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name" required />
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" required />
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={(e)=>setEmail(e.target.value)} placeholder="Email " required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={(e)=>setSubject(e.target.value)} placeholder="Subject " required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <textarea className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Write your message here" onChange={(e)=>setMessage(e.target.value)} rows={6} required />
                        </div>
                        <div className='text-center mt-12'>
                            <button type="submit" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none shadow-xl focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex md:flex-row gap-10 flex-col mt-10">
                <div className="flex flex-col gap-2">
                    <div className="sm:font-extrabold font-bold sm:text-3xl text-lg  flex justify-start">
                        Our offices
                    </div>
                    <div className="sm:text-xl text-base font-medium">
                        Bangalore
                    </div>
                    <div className="sm:text-lg text-xs">
                        Translead Medtech Pvt Ltd,Incubated @ CPDMED TBI,MedTech & Geriatric Healthcare Technology Business Incubator @ Centre for Product Design & Manufacturing (CPDM),Raman Building,Indian Institute of Science (IISc),Bangalore-560012,Karnataka
                    </div>
                </div>
                <div className='w-[80vw] h-[50vw] md:h-[30vw]'>
                    <Map/>
                </div>
            </div>
        </div>
    );
}

export default Contact;