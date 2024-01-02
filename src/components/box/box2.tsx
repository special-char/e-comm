import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const Box2 = ({ children }: Props) => {
  const box2Array = React.Children.toArray(children);
  return (
    <div className="flex flex-col items-center">
      <div className="aspect-square xl:w-[85%] lg:w-[80%] md:w-[80%] w-[60%] hover:scale-105 transition-all duration-500 hover:shadow-xl hover:border-0 ease-in-out rounded-xl border-2 border-black border-dashed ">
        {box2Array[0]}
      </div>
      <div className="text-[#FD1E39] xl:text-xl xl:font-medium xl:pt-4 lg:text-xl lg:font-medium lg:pt-3 md:text-lg md:font-normal md:pt-2 text-base font-normal pt-1">
        shop
      </div>
      <div className="xl:text-2xl xl:font-semibold xl:pt-1 lg:text-2xl lg:font-semibold lg:pt-1 md:text-xl md:font-medium md:pt-1 text-xl font-medium">
        {box2Array[1]}
      </div>
    </div>
  );
};

export default Box2;

//