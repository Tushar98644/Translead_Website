import { useState } from "react";

const FlipCard = ({ name, position, children }: { name: string, position: string, children: React.ReactNode }) => {

    return (
        <div className="flex mt-[-100px]">
            <div className="group h-72 w-60 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img className="h-full w-full group-hover:hidden rounded-xl object-cover shadow-xl shadow-black/40" src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')" alt="" />
                        <p className="text-xl group-hover:hidden md:font-extrabold font-semibold mt-8">Prof.G .K Ananthasuresh</p>
                        <p className="text-base group-hover:hidden md:mx-0 mx-12 text-center mt-4"> Dean, Division of Mechanical Sciences, IISc, Bangalore</p>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">Jane Doe</h1>
                            <p className="text-lg">Photographer & Art</p>
                            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FlipCard;
