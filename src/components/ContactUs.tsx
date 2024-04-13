"use client";

// Native Imports
import React, { useEffect, useState } from "react";

// Dependency Imports
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

// Redux Imports

import { SignUpSchema } from "../utils/validationSchema";

type SignUpFields = z.infer<typeof SignUpSchema>;

const ContactUs = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [showError, setShowError] = useState<string>("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFields>({
    resolver: zodResolver(SignUpSchema),
  });

  const [phoneNumber, setPhoneNumber] = useState("");

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
    console.log(data);
  };

  return (
    <div className="w-full h-full  flex flex-col items-center justify-center gap-8 ">
      {/* Title */}
      <div className="align-middle text-center">
        <h4 className="my-2 md:mx-16 ">Contattaci</h4>
      </div>

      {/* Input Form */}
      <form
        className="flex flex-col w-full md:w-1/2 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex border border-black rounded-lg px-4 py-2 my-2">
          <input
            className="w-full ml-5 focus:outline-none"
            {...register("name")}
            type="text"
            placeholder="Nome"
          />
          <input
            className="w-full ml-5 focus:outline-none"
            {...register("lastname")}
            type="text"
            placeholder="Cognome"
          />
        </div>
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}
        <div className="w-full flex border border-black rounded-lg px-4 py-2 my-2">
          <div className="w-full flex border border-black rounded-lg px-4 py-2 my-2">
            <input
              className="w-full ml-5 focus:outline-none"
              {...register("email")}
              type="email"
              placeholder="Email"
            />
          </div>

          <input
            className="w-full ml-5 focus:outline-none"
            {...register("phone")}
            value={phoneNumber}
            onChange={handleChange}
            type="text"
            maxLength={11} // including spaces
            placeholder="Enter Phone Number"
          />
        </div>
        {errors.phone && (
          <div className="text-red-500">{errors.phone.message}</div>
        )}

        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <div className="w-full flex border border-black items-center rounded-lg px-4 py-2 mt-2">
          <select
            className="w-full ml-5 focus:outline-none"
            {...register("dropdownData")}
          >
            {" "}
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        {showError && (
          <p className=" text-red-500 w-full text-center "> {showError}</p>
        )}
        {errors.dropdownData && (
          <div className="text-red-500">{errors.dropdownData.message}</div>
        )}
        {errors.lastname && (
          <div className="text-red-500">{errors.lastname.message}</div>
        )}

        <textarea
          {...register("additionalData")}
          placeholder="Type something..."
          rows={4}
          cols={50}
        />

        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
        <button type="submit">Submit</button>
        {errors.additionalData && (
          <div className="text-red-500">{errors.additionalData.message}</div>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
