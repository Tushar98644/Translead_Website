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
            <div className="grid grid-cols-3 mx-28">
               <div>
               <Image src="/Product/p-2.png" className='' width={300} height={300} alt="logo"></Image>
               </div>

            </div>
        </div>
     );
}
 
export default Team;