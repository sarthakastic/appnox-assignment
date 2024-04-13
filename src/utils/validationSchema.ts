import { z } from "zod";

const phoneRegex = new RegExp("^[0-9]{4}[ ][0-9]{6}");
const PhoneSchema = z
  .string()
  .nonempty({ message: "PhoneNumber is required" })
  .regex(phoneRegex, "Invalid Number!");

export const RegisterSchema = z.object({
  email: z.string().email().nonempty(),
  dropdownData: z.string().nonempty({ message: "dropdown data is required" }),
  name: z.string().nonempty({ message: "Name is required" }),
  lastname: z.string().nonempty({ message: "Last Name is required" }),
  phone: PhoneSchema,
  additionalData: z
    .string()
    .nonempty({ message: "Additional Datais required" }),
});
