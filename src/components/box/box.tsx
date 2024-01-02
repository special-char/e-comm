import React, { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

const Box = ({ children, className }: Props) => {
  const boxArray = React.Children.toArray(children);
  return (
    <div>
      <div className={className}>
        <div className="flex flex-col p-5 h-full items-center hover:shadow-xl transition-all ease-in-out duration-500">
          <div className="icon h-16 w-16 py-3 hover:scale-125 transition-all ease-in-out duration-300">
            {boxArray[0]}
          </div>
          <div className="text1 text-3xl font-semibold pt-8">{boxArray[1]}</div>
          <div className="text2 text-xl font-medium pt-2">{boxArray[2]}</div>
        </div>
      </div>
    </div>
  );
};

export default Box;

// bg-[#CDB6F2]
// bg-[#BBF9FB]
// bg-[#F1B2C5]
