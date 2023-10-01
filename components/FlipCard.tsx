/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const FlipCard = ({ name, position, desc1, desc2, desc3,frontName,frontPosition }) => {

    return (
        <div className="flex mt-[-100px] hover:mr-20">
            <div className="group h-72 w-60">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:md:p-40 group-hover:p-40">
                    <div className="absolute inset-0">
                        <img className="h-full w-full group-hover:hidden rounded-xl object-cover shadow-xl shadow-black/40" src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')" alt="" />
                        <p className="text-xl group-hover:hidden md:font-extrabold font-semibold mt-8 text-center">{frontName}</p>
                        <p className="text-base group-hover:hidden md:mx-0 mx-4 text-center mt-4"> {frontPosition}</p>
                    </div>
                    <div className="absolute inset-0 h-full w-full py-6 rounded-t-xl bg-white px-2 text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center ">
                            <div className="mt-2 mx-0 flex flex-col gap-2">
                                <div className="flex gap-0">
                                    <svg width="50" height="16" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8357 11.3689V0.464844L0.840332 6.37122L10.8357 11.3689Z" fill="#FB1010" />
                                        <path d="M11.2901 11.3691V6.82568L14.9248 8.89085L11.2901 11.3691Z" fill="#FB1010" fill-opacity="0.31" />
                                    </svg>
                                    <p className="text-[15.5px]">{desc1}</p>
                                </div>
                                <div className="flex gap-0">
                                    <svg width="50" height="16" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8357 11.3689V0.464844L0.840332 6.37122L10.8357 11.3689Z" fill="#FB1010" />
                                        <path d="M11.2901 11.3691V6.82568L14.9248 8.89085L11.2901 11.3691Z" fill="#FB1010" fill-opacity="0.31" />
                                    </svg>
                                    <p className="text-[15.5px]">{desc2}</p>
                                </div>
                                <div className="flex gap-0">
                                    <svg width="55" height="16" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8357 11.3689V0.464844L0.840332 6.37122L10.8357 11.3689Z" fill="#FB1010" />
                                        <path d="M11.2901 11.3691V6.82568L14.9248 8.89085L11.2901 11.3691Z" fill="#FB1010" fill-opacity="0.31" />
                                    </svg>
                                    <p className="text-[15.5px]">{desc3}</p>
                                </div>
                            </div>

                            <button className="mt-[1vw]  rounded-b-md bg-gray-200 py-6 w-80 text-sm text-black">
                                <p className="font-semibold">{name}</p>
                                <p className="mx-2">{position}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FlipCard;
