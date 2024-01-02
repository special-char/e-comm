import React, { Children, ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

const Title = ({ children, className }: Props) => {
  return (
    <div className={className}>
      <div className="font-bold flex justify-center text-shadow-lg xl:text-5xl lg:text-4xl md:text-3xl text-2xl xl:pb-16 lg:pb-16 md:pb-16 pb-16" >
        {children}
      </div>
    </div>
  );
};

export default Title;
