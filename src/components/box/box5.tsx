import React, { Children, ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

const Box5 = ({ children, className }: Props) => {
  const box5Array = React.Children.toArray(children);
  return (
    <div>
      <div className="w-full aspect-[6/2] border-4 p-4 bg-white border-black hover:bg-[#E7D9FF] duration-500 hover:shadow-xl transition-all hover:border-dashed hover:border-2 hover:border-black ease-in-out rounded-2xl flex gap-4 justify-center items-center">
        <div className="flex h-32">{box5Array[0]}</div>
        <div className="xl:text-4xl xl:font-bold lg:text-4xl lg:font-bold md:text-2xl md:font-semibold text-xl font-semibold">{box5Array[1]}</div>
      </div>
    </div>
  );
};

export default Box5;
