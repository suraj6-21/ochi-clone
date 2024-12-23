// import React from 'react'
import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [useAnimation(0), useAnimation(1)];

  const HandleHover = (index) => {
    cards[index].start({
      y: "0",
    });
  };

  const HandleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };

  return (
    <div className="w-full py-20 bg-zinc-200 text-black">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight  ">
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="card w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => HandleHover(0)}
            onHoverEnd={() => HandleHoverEnd(0)}
            className="cardcantainer relative w-1/2 h-[75vh] "
          >
            <h1>FYDE</h1>

            <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter  ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => HandleHover(1)}
            onHoverEnd={() => HandleHoverEnd(1)}
            className="cardcantainer relative w-1/2 h-[75vh] "
          >
            <h1>VISE</h1>

            <div className="w-full h-full rounded-xl overflow-hidden bg-green-600">
              <h1 className="absolute text-[#CDEA68] flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter  ">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden ">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
