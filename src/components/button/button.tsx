import React, { Children, ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

const Button = ({ children, className }: Props) => {
  return (
    <div>
      <div className={className}>
        <button className="bg-[#FD1E39] hover:bg-white hover:text-black hover:shadow-xl text-white font-bold py-3 px-6 rounded-full transition-all ease-in-out duration-300">
          {children}
        </button>
      </div>
    </div>
  );
};

export default Button;
