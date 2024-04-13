import React from "react";

const Contact = ({
  text,
  subText,
  logo,
}: {
  text: string;
  subText: string;
  logo: any;
}) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full w-screen md:w-1/4 border ">
      <div className="p-4 rounded-full  border-2  ">{logo}</div>
      <p>{subText}</p>
      <p className="font-bold">{text}</p>
    </div>
  );
};

export default Contact;
