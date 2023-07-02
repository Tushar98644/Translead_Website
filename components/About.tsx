/* eslint-disable react/no-unescaped-entities */
const About = () => {
    return (
        <div className="flex flex-col gap-10 w-half pt-16">
            <div className="flex flex-row gap-40 px-12 py-8 mt-8 background">
                <div className="flex flex-col gap-5">
                    <span className="text-4xl font-extrabold">Our <span className="text-red-600">Mission</span> </span>
                    <span>To be part of people's lives by offering Innovative, affordable and high quality medtech products.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="text-4xl font-extrabold ml-[32vw]">Our <span className="text-red-600">Vision</span> </span>
                    <span>To be one of the leading medtech companies in the world, admired for its innovation, and results contributing to a better, sustainable and Eco friendly world.</span>
                </div>
            </div>
        </div>
    );
}

export default About;