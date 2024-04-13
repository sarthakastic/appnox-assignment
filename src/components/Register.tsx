// Native Imports
import { useState } from "react";

// Dependency Imports
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

// Redux Imports

import { RegisterSchema } from "../utils/validationSchema";
import ImageUploader from "./ImageUploader";

type SignUpFields = z.infer<typeof RegisterSchema>;

const Register = ({ setIsSubmitted }: { setIsSubmitted: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFields>({
    resolver: zodResolver(RegisterSchema),
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [images, setImages] = useState<any>([]);

  const formatPhoneNumber = (value: any) => {
    // Remove all non-numeric characters from the input value
    let numericValue = value.replace(/\D/g, "");

    // Format the numeric value with space
    let formattedValue = "";
    for (let i = 0; i < numericValue.length; i++) {
      if (i === 4) {
        formattedValue += " ";
      }
      formattedValue += numericValue[i];
    }

    return formattedValue;
  };

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
  };

  const onSubmit: SubmitHandler<SignUpFields> = (data) => {
    console.log({ ...data, ...images });
    setIsSubmitted(true);
  };

  return (
    <div className="w-full h-full  flex flex-col items-center justify-center gap-8 p-10 ">
      {/* Title */}
      <div className="align-middle text-center">
        <h4 className="my-2 md:mx-16 text-4xl md:text-6xl font-dmserif ">
          Contattaci
        </h4>
      </div>

      {/* Input Form */}
      <form
        className="flex flex-col w-full md:w-4/5   "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col md:flex-row gap-4 my-2  ">
          <input
            className="md:w-4/5 h-10 focus:outline-none bg-[#F6F6F6] rounded-lg  px-4 "
            {...register("name")}
            type="text"
            placeholder="Nome"
          />
          <input
            className="md:w-4/5 h-10 focus:outline-none bg-[#F6F6F6] rounded-lg  px-4 "
            {...register("lastname")}
            type="text"
            placeholder="Cognome"
          />
        </div>

        {errors.lastname && (
          <div className="text-red-500">{errors.lastname.message}</div>
        )}
        <div className="w-full flex flex-col md:flex-row gap-4  my-2 ">
          <input
            className="w-full h-10 focus:outline-none bg-[#F6F6F6] rounded-lg px-4"
            {...register("email")}
            type="email"
            placeholder="Email"
          />

          <input
            className="w-full h-10 focus:outline-none bg-[#F6F6F6] rounded-lg px-4"
            {...register("phone")}
            value={phoneNumber}
            onChange={handleChange}
            type="text"
            maxLength={11}
            placeholder="Telefono"
          />
        </div>

        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        {errors.phone && (
          <div className="text-red-500">{errors.phone.message}</div>
        )}

        <div className="w-full flex bg-[#F6F6F6] items-center rounded-lg px-4 my-2 ">
          <select
            className="w-full h-10 focus:outline-none bg-[#F6F6F6] rounded-lg"
            {...register("dropdownData")}
          >
            {" "}
            <option value="">Richiesta Valutazionen</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        {errors.dropdownData && (
          <div className="text-red-500">{errors.dropdownData.message}</div>
        )}

        <textarea
          className="bg-[#F6F6F6] px-4 my-2 mb-4 rounded-lg "
          {...register("additionalData")}
          placeholder="Come possiamo aiutarla?"
          rows={4}
          cols={50}
        />

        {errors.additionalData && (
          <div className="text-red-500">{errors.additionalData.message}</div>
        )}
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
        <div className="my-2 w-full  ">
          <ImageUploader images={images} setImages={setImages} />
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded-full w-full p-2 mt-10 "
        >
          INVIA MESSAGGIO
        </button>
      </form>
    </div>
  );
};

export default Register;
