import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";



function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen  bg-zinc-900 pt-2 "
    >
      <div className="textstructure  mt-40 px-20 ">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex  items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] h-[5.4vw] rounded-md relative -top-[.7vw] bg-green-500 "
                  ></motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[5.5vw]  font-bold font-['Founders_Grotesk_X-Condensed'] ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-2 border-zinc-800 mt-20 flex justify-between items-center py-3 px-20 ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none "
          >
            {item}{" "}
          </p>
        ))}

        <div className="start flex items-center gap-2 ">
          <div className="px-5 py-2 border-[1.3px] border-zinc-400 font-light text-sm  uppercase  rounded-full">
            Start the project{" "}
          </div>
          <div className="w-10 h-10 border-[1px] flex items-center justify-center border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
