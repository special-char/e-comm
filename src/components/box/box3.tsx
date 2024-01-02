import React, { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

const Box3 = ({ children, className }: Props) => {
  const box3Array = React.Children.toArray(children);
  return (
    <div className="flex flex-col items-center">
      <div className="xl:w-32 xl:h-32 xl:text-5xl lg:w-32 lg:h-32 lg:text-5xl md:w-32 md:h-32 md:text-5xl justify-center items-center w-28 h-28 text-4xl bg-[#E7D9FF] p-10 flex rounded-[2rem] transition-all hover:scale-105 hover:shadow-xl duration-300 hover:bg-[#FDFDFD]  hover:border-dashed hover:border-2 hover:border-black ease-in-out">
        {box3Array[0]}
      </div>
      <div className="flex justify-center xl:pt-3 xl:text-3xl xl:font-semibold lg:pt-3 lg:text-3xl lg:font-semibold md:pt-2 md:text-3xl md:font-semibold pt-1 text-2xl font-semibold">
        {box3Array[1]}
      </div>
    </div>
  );
};

export default Box3;
