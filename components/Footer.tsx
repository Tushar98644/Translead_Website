import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t shadow-lg md:mt-16 mt-12 min-w-full">
            <div className=" min-w-full p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between items-center flex-row gap-40">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="items-center hidden md:flex">
                            <Image src="/Home/Translead_Logo.png" width={300} height={300} className="h-20 ml-12 mr-[-8vw]" alt="FlowBite Logo" />
                        </Link>

                </div>
                <div className="flex min-w-screen">
                    <div>
                        <div className="mb-6 md:text-sm text-xs font-semibold text-black uppercase flex flex-row gap-2 ml-5">
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1509_3020)">
                                        <path d="M20.891 2.006L20.997 2L21.127 2.008L21.217 2.024L21.34 2.059L21.447 2.105L21.547 2.162L21.637 2.229L21.719 2.304L21.771 2.363L21.853 2.479L21.905 2.575C21.952 2.675 21.982 2.781 21.995 2.891L22 2.997C22 3.072 21.992 3.146 21.976 3.217L21.941 3.34L15.409 21.417C15.2852 21.6866 15.0866 21.9149 14.8368 22.075C14.5871 22.2351 14.2966 22.3201 14 22.32C13.7328 22.3208 13.47 22.2525 13.2371 22.1216C13.0042 21.9907 12.8092 21.8017 12.671 21.573L12.606 21.446L9.25399 14.744L2.58399 11.408C2.33719 11.2951 2.12436 11.1194 1.96677 10.8985C1.80918 10.6775 1.71236 10.4191 1.68599 10.149L1.67999 10C1.67999 9.44 1.98099 8.928 2.52099 8.63L2.66099 8.56L20.678 2.054L20.784 2.024L20.891 2.006Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1509_3020">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>Translead Medtech Pvt Ltd,Incubated @ CPDMED TBI,MedTech & Geriatric Healthcare Technology Business Incubator @ Centre for Product Design & Manufacturing (CPDM),Raman Building,Indian Institute of Science (IISc),Bangalore-560012,Karnataka</div>
                        </div>
                        <ul className="text-black font-medium ml-5 text-sm md:text-base">
                            <div className="flex md:flex-row md:gap-10 gap-2 flex-col">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline flex flex-row gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="black" />
                                        </svg>

                                        +91-86181 13553</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline flex flex-row gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1509_3026)">
                                                <path d="M22 7.53503V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20.0001 3.49849 19.7077 2.94174 19.1828C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V7.53503L11.445 13.832L11.561 13.898C11.6977 13.9648 11.8478 13.9995 12 13.9995C12.1522 13.9995 12.3023 13.9648 12.439 13.898L12.555 13.832L22 7.53503Z" fill="black" />
                                                <path d="M19 4C20.08 4 21.027 4.57 21.555 5.427L12 11.797L2.445 5.427C2.69573 5.01977 3.04021 4.6784 3.44971 4.43138C3.8592 4.18436 4.32183 4.03886 4.799 4.007L5 4H19Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1509_3026">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        info@transleadmedtech.com</a>
                                </li>
                            </div>
                            <li>
                                <a href="https://tailwindcss.com/" className="hover:underline">© Copyright 2023 - All Rights Reserved</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://flowbite.com/" className="hover:underline">Follow Translead Medtech</a>
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <a href="#" className="text-black hover:text-gray-900">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                        <span className="sr-only">Instagram page</span>
                    </a>
                    <a href="#" className="text-black hover:text-gray-900 ">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        <span className="sr-only">Twitter page</span>
                    </a>
                    <a href="#" className="text-black hover:text-gray-900 ">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                        <span className="sr-only">Dribbble account</span>
                    </a>
                </div>
            </div>
        </div>
        </footer >
    );
}

export default Footer;