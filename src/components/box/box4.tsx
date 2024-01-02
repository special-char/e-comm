import React, { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

const Box4 = ({ children, className }: Props) => {
  const box4Array = React.Children.toArray(children);
  return (
    <div className="flex flex-col justify-center p-4 w-full bg-[#FFE3BD] rounded-2xl border-2 border-dashed border-black shadow-lg">
      <div className={className}>
        <div className="p-4">{box4Array[0]}</div>
        <div className="xl:text-2xl xl:font-semibold xl:pt-4 lg:text-2xl lg:font-semibold lg:pt-3 md:text-xl md:font-medium md:pt-2 text-xl font-medium pt-2">
          {box4Array[1]}
        </div>
        <div className="xl:text-lg xl:font-normal xl:pt-2 lg:text-lg lg:font-normal lg:pt-3">
          {box4Array[2]}
        </div>
      </div>
    </div>
  );
};

export default Box4;
