// import React from 'react'

const Cards = () => {
    return (
        <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-32">
            <div className="cardcontainer h-[50vh] w-1/2">
                <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center ">
                    <img
                        className="w-32"
                        src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                        alt=""
                    />
                    <button className="absolute px-3 py-1 border-[1.5px]  font-[1vw] rounded-full left-10 bottom-10">
                        &copy;2019-2022
                    </button>
                </div>
            </div>

            <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
                <div className="card rounded-xl w-1/2 h-full bg-[#16403c] ">
                    <div className="card relative rounded-xl w-full h-full bg-[#a1ddd684] flex items-center justify-center ">
                        <img
                            className="w-32"
                            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                            alt=""
                        />
                        <button className="absolute px-3 py-1 border-[1.5px] uppercase text-[1vw] rounded-full left-10 bottom-10">
                            Rating 5.0 on cluth
                        </button>
                    </div>
                </div>

                <div className="card rounded-xl w-1/2 h-full bg-[#16403c] ">
                    <div className="card relative rounded-xl w-full h-full bg-[#a1ddd684] flex items-center justify-center ">
                        <picture>
                            <img
                                className="w-32"
                                src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                                alt=""
                            />
                        </picture>
                        <button className="absolute px-3 py-1 border-[1.5px] uppercase rounded-full bottom-10 left-1/2 -translate-x-1/2 text-[1vw] whitespace-nowrap">
                            Business Bootcamp Alumni
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
