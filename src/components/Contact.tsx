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
    <div className="flex flex-col gap-4 justify-center items-center min-h-96 h-full w-screen md:w-full border ">
      <div className="p-4 rounded-full  border-2  ">{logo}</div>
      <p className="text-center">{subText}</p>
      <p className="font-bold">{text}</p>
    </div>
  );
};

export default Contact;
