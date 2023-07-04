/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
const Product = () => {
    return (
        <div className="flex flex-col w-full md:pt-12 pt-4 md:gap-10 gap-3 rounded-lg">
            <div className="flex md:flex-row md:gap-96 md:px-12 px-6 py-8 mt-8 background flex-col-reverse">
                <div className="flex flex-col md:gap-5 gap-2">
                    <span className="md:text-4xl md:font-extrabold font-semibold text-lg">Stand at <span className="text-red-600">Ease</span> </span>
                    <span className='md:flex flex-row gap-3 text-lg hidden'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.36249 26.1718C6.77025 24.9002 4.68396 22.7896 3.4424 20.1829C2.20083 17.5761 1.87689 14.6262 2.52319 11.8121C3.16948 8.998 4.74805 6.48501 7.00257 4.68116C9.2571 2.87732 12.0552 1.88854 14.9425 1.87538C17.8298 1.86222 20.6368 2.82545 22.9077 4.60867C25.1785 6.39189 26.7799 8.89038 27.4519 11.6985C28.1238 14.5065 27.8267 17.4593 26.609 20.0773C25.3912 22.6952 23.3243 24.8247 20.7437 26.1199" stroke="#FB1010" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.885 24.1287L18.6412 26.8562L21.2937 28.1249" stroke="#FB1010" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.8194 9.00566C16.5822 9.00566 17.2006 8.38726 17.2006 7.62441C17.2006 6.86157 16.5822 6.24316 15.8194 6.24316C15.0565 6.24316 14.4381 6.86157 14.4381 7.62441C14.4381 8.38726 15.0565 9.00566 15.8194 9.00566Z" stroke="#FB1010" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.3144 18.8887L10.49 21.1106C9.61627 22.1218 10.8775 23.0087 11.8025 22.1337L13.5894 19.8825L14.1756 17.6825L15.1188 18.625L15.7475 21.8793C16.1631 22.785 17.515 22.7356 17.4706 21.5706L16.5394 18.0931L15.2038 15.7806L15.9519 12.99L16.7863 13.2137C16.7743 13.309 16.7909 13.4058 16.834 13.4916C16.8771 13.5775 16.9446 13.6487 17.0281 13.6962C17.3188 13.8512 19.4081 14.4912 19.4081 14.4912C20.7225 14.895 20.8706 13.5718 19.8081 13.2637L18.0688 12.7968L17.2075 11.3631L15.8081 10.1093L13.6688 10.0593L10.645 11.885L9.52189 14.8862C9.27376 15.725 10.4763 15.9431 10.8088 15.2912C10.97 15.005 11.7825 13.0712 11.7825 13.0712L13.5475 12.195L12.6844 16.1537L12.3144 18.8887Z" stroke="#FB1010" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p>                        thoughtfully crafted height and width to accommodate a wide range of users
                        </p>
                    </span>
                    <span className='md:flex flex-row gap-3 text-lg hidden'>
                        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25289 0.769287V3.5719C2.89516 4.63069 5.41898 6.10894 7.63984 7.53589C8.79375 8.27729 9.86562 9.00347 10.6859 9.65854C11.5117 10.3085 12.1133 10.8265 12.2992 11.4714L12.3156 11.5222V11.573C12.3375 12.3449 12.518 12.8527 12.7477 13.1574C12.9773 13.4621 13.2453 13.5941 13.6008 13.6398C14.3062 13.7363 15.3617 13.3351 16.1875 12.6648C17.0078 11.9945 17.5547 11.0957 17.5109 10.4203C17.4891 10.0851 17.3523 9.79058 16.9969 9.50112C16.6469 9.21167 16.0508 8.93745 15.143 8.75972C14.4867 8.63276 13.6227 8.18081 12.4469 7.52573C11.2711 6.87573 9.84922 6.02769 8.37266 5.12886C5.78047 3.54245 3.07672 1.83874 1.25289 0.769287ZM10.4945 0.914014C11.457 1.49343 13.125 2.53851 14.8641 3.82022C17.5383 5.78901 20.3109 8.34839 20.8195 10.2679V10.273C20.9508 10.7808 21.0109 12.1417 20.9727 13.7871C20.9344 15.4273 20.825 17.3875 20.6883 19.2714C20.5242 21.5667 20.3273 23.7351 20.2016 25.0859H21.1914C21.3172 23.7249 21.5086 21.5921 21.6727 19.3324C21.8039 17.4433 21.9188 15.473 21.957 13.8023C21.9953 12.1367 21.9789 10.8164 21.7711 10.0546V10.0496C21.1258 7.61714 18.2055 5.11362 15.4766 3.1037C14.3172 2.25007 13.1852 1.49851 12.2664 0.914014H10.4945ZM0.984375 7.24643V8.49058C3.66133 10.7554 7.46484 13.655 9.94766 15.3105C9.36797 18.2964 9.47734 22.0492 9.56484 25.0859H10.5492C10.4562 21.9425 10.3578 18.0628 10.9648 15.1988L11.0305 14.9042L10.768 14.7316C8.15391 13.0203 3.69633 9.59761 0.984375 7.24643ZM18.3367 8.92222L18.7742 12.9644C19.2391 12.7156 19.5289 12.416 19.7039 12.1011C19.9391 11.6644 19.9664 11.1667 19.8352 10.6691C19.6219 9.90737 19.0039 9.21675 18.3367 8.92222ZM17.325 13.3656C17.1828 13.4519 16.9531 13.6601 16.6031 13.8835C15.9578 14.3 14.8859 14.6859 12.9883 14.5843C12.9445 14.9957 13.1305 15.3562 13.5461 15.7269C14.0602 16.1941 14.9352 16.6003 15.9633 16.8136L16.1273 16.8492L16.2367 16.971C16.4828 17.2554 16.5484 17.5601 16.6469 17.9917C16.7453 18.4234 16.8328 18.9617 16.9094 19.571C17.0625 20.7949 17.1773 22.3132 17.2594 23.796C17.2812 24.2328 17.3031 24.6644 17.3195 25.0859H18.9055C18.8398 22.3792 18.8727 19.3375 19.1898 16.1281C19.1953 15.5035 19.1625 14.8941 18.9492 14.4167C18.7359 13.9394 18.3805 13.5839 17.582 13.325C17.4781 13.2894 17.3906 13.325 17.325 13.3656ZM13.1359 16.6105C13.1359 16.773 13.1414 16.9355 13.1523 17.098C13.1906 17.7886 13.3328 18.4031 13.5461 18.6621L13.65 18.789L13.6281 25.0859H14.6016L14.7164 18.6214L14.8422 18.4945C15.1539 18.1796 15.2906 17.9105 15.3891 17.616C14.5195 17.3976 13.7375 17.0625 13.1359 16.6105Z" fill="#FB1010" />
                        </svg>


                        <p>                        thoughtfully crafted height and width to accommodate a wide range of users
                        </p>
                    </span>
                    <span className='md:flex flex-row gap-3 text-lg hidden'>
                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 3.75C6.5 3.15326 6.75681 2.58097 7.21393 2.15901C7.67105 1.73705 8.29103 1.5 8.9375 1.5H17.0625C17.709 1.5 18.329 1.73705 18.7861 2.15901C19.2432 2.58097 19.5 3.15326 19.5 3.75V4.5C19.4999 5.16515 19.2605 5.81143 18.8193 6.33734C18.3781 6.86324 17.7601 7.23896 17.0625 7.4055V9.75C17.7068 9.75 18.2829 10.008 18.7468 10.3327C19.2156 10.6612 19.6284 11.0962 19.9672 11.5522C20.6245 12.4372 21.125 13.5697 21.125 14.4375C21.125 14.8996 20.9569 15.3483 20.6477 15.7117C20.3384 16.0751 19.9059 16.3321 19.4196 16.4415L20.4823 21.285C20.7196 22.395 19.63 23.133 19.0157 21.285L17.29 16.5H17.0365L16.9634 19.4865C16.9284 20.6362 15.9128 20.487 15.8665 19.4865L15.5431 16.5H10.4569L10.1335 19.4865C10.0864 20.487 9.07156 20.6362 9.03662 19.4865L8.9635 16.5H8.70919L6.98344 21.285C6.36919 23.133 5.27962 22.395 5.51687 21.285L6.57962 16.4415C6.09346 16.3318 5.66123 16.0747 5.35216 15.7114C5.04309 15.3481 4.87507 14.8995 4.875 14.4375C4.875 13.5705 5.3755 12.4372 6.03281 11.5522C6.37163 11.0962 6.78438 10.6612 7.25319 10.3327C7.71712 10.008 8.29319 9.75 8.9375 9.75V7.4055C8.23987 7.23896 7.62193 6.86324 7.18074 6.33734C6.73954 5.81143 6.5001 5.16515 6.5 4.5V3.75ZM8.9375 11.25C8.76931 11.25 8.53287 11.3197 8.2355 11.5282C7.94219 11.7337 7.644 12.0367 7.37344 12.4005C6.812 13.1565 6.5 13.992 6.5 14.4375C6.5 14.748 6.773 15 7.10938 15H18.8906C19.0522 15 19.2072 14.9407 19.3215 14.8352C19.4358 14.7298 19.5 14.5867 19.5 14.4375C19.5 13.992 19.188 13.1565 18.6266 12.4005C18.356 12.0367 18.0578 11.733 17.7653 11.5282C17.4671 11.3197 17.2307 11.25 17.0625 11.25H8.9375ZM15.4375 9.75V7.5H10.5625V9.75H15.4375ZM17.875 4.5V3.75C17.875 3.55109 17.7894 3.36032 17.637 3.21967C17.4847 3.07902 17.278 3 17.0625 3H8.9375C8.72201 3 8.51535 3.07902 8.36298 3.21967C8.2106 3.36032 8.125 3.55109 8.125 3.75V4.5C8.125 4.89782 8.29621 5.27936 8.60095 5.56066C8.9057 5.84196 9.31902 6 9.75 6H16.25C16.681 6 17.0943 5.84196 17.399 5.56066C17.7038 5.27936 17.875 4.89782 17.875 4.5Z" fill="#FB0000" />
                        </svg>


                        <p>                        thoughtfully crafted height and width to accommodate a wide range of users
                        </p>
                    </span>
                    <span className='md:hidden text-sm'>
                        With its patented Compliant Hinge Mechanism, dynamic balancing technology, and premium upholstery, it ensures smooth transitions, enhanced stability, improved posture, and a luxurious seating experience.
                    </span>
                    <div className='flex md:ml-8 mt-2 text-white'>
                        <button className='bg-red-600 md:p-4 p-2 md:text-base text-xs rounded-lg'>Pre-order Now</button>
                    </div>
                </div>
                <div>
                    <Image src="/Product/product.png" className='' width={400} height={400} alt="logo"></Image>
                </div>
            </div>
            <div className="flex flex-col md:mx-8 md:gap-2 mx-6">
                <span className="md:text-4xl text-base font-bold md:font-extrabold md:ml-0">
                    How does ‘Stand at Ease Work’?
                </span>
                <Carousel showThumbs={false} dynamicHeight={false} useKeyboardArrows={true} autoPlay={false} infiniteLoop={false}>
                    <div className='flex flex-col gap-2 md:hidden mt-4'>
                        <div className='flex items-start'>
                            <span className='text-sm font-medium'>Stand to Sit</span>
                        </div>
                        <span className='text-xs'>As the user begins to sit, the chair provides a sharp rise, providing crucial support, which gradually slows down as they fully sit.</span>
                        <div className='flex flex-row gap-4 pt-4'>
                            <Image src="/Product/p-2.png" className='' width={800} height={800} alt="logo"></Image>
                            <Image src="/Product/p-3.png" className='' width={800} height={600} alt="logo"></Image>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 md:hidden mt-4'>
                        <div className='flex items-start'>
                            <span className='text-sm font-medium'>Sit to stand</span>
                        </div>
                        <div className='text-xs'>On the other hand, when standing up, the seat pushes the user, effectively offloading the arms and minimizing muscle activation.</div>
                        <div className='flex flex-row gap-4 pt-4'>
                            <Image src="/Product/p-4.png" className='' width={800} height={600} alt="logo"></Image>
                            <Image src="/Product/p-5.png" className='' width={800} height={600} alt="logo"></Image>
                        </div>
                    </div>
                </Carousel>
                <div className="md:flex flex-row gap-6 flex-1 items-center hidden">
                    <span className='text-lg'>The Stand At Eaze chair incorporates a unique mechanism that offers excellent support to users. As the user begins to sit, the chair provides a sharp rise, providing crucial support, which gradually slows down as they fully sit. This design ensures that users do not exert unnecessary tension on their knees while seated</span>
                    <Image src="/Product/p-2.png" className='' width={600} height={600} alt="logo"></Image>
                    <Image src="/Product/p-3.png" className='' width={600} height={600} alt="logo"></Image>
                </div>
                <div className="md:flex flex-row gap-8 mt-5 flex-1 items-start hidden">
                    <Image src="/Product/p-4.png" className='' width={800} height={600} alt="logo"></Image>
                    <Image src="/Product/p-5.png" className='' width={800} height={600} alt="logo"></Image>
                    <span className='text-lg'>On the other hand, when standing up, the seat pushes the user, effectively offloading the arms and minimizing muscle activation. Additionally, the seat and mechanism work together to provide resistance against sudden drops, offering protection to the hips and reducing activation of the thigh muscles. With these thoughtful design features, the Stand At Eaze chair prioritizes user comfort, safety, and overall well-being.</span>
                </div>
            </div>
            <div className="md:flex flex-col md:mx-8 gap-8 mt-5 hidden">
                <span className="text-3xl font-extrabold">
                    Let’s see the process which went behind making the product                </span>
                <div className="flex flex-row gap-12 flex-1 items-start pt-8">
                    <span className='text-lg'>The Stand At Eaze chair incorporates a unique mechanism that offers excellent support to users. As the user begins to sit, the chair provides a sharp rise, providing crucial support, which gradually slows down as they fully sit. This design ensures that users do not exert unnecessary tension on their knees while seated</span>
                    <div>
                        <iframe
                            width="550vw"
                            height="300vw"
                            src='https://www.youtube.com/embed/aD1c_YmHsFg'
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;