// import React from 'react'
import homepagePhoto from './assets/Homepage-Photo.jpg'

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#838a6a] ">
        <div className="w-1/2 ">
          <h1 className=" text-7xl">Our Approch:</h1>
          <button className="flex gap-10 items-center px-6 py-4 uppercase bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#768541] ">
          <img
            src={homepagePhoto}
            alt="Homepage"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
