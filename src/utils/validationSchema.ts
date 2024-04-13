import { z } from "zod";

const passwordValidator = z.string().refine(
  (value) => {
    // Check if password has at least 8 characters
    if (value.length < 8) return false;

    // Check if password has at least one uppercase letter
    if (!/[A-Z]/.test(value)) return false;

    // Check if password has at least one lowercase letter
    if (!/[a-z]/.test(value)) return false;

    // Check if password has at least one number
    if (!/\d/.test(value)) return false;

    // Check if password has at least one symbol
    if (!/[^a-zA-Z0-9]/.test(value)) return false;

    return true;
  },
  {
    message:
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol",
  }
);

const phoneRegex = new RegExp("^[0-9]{4}[ ][0-9]{6}");
const PhoneSchema = z
  .string()
  .nonempty({ message: "PhoneNumber is required" })
  .regex(phoneRegex, "Invalid Number!");

export const SignUpSchema = z.object({
  email: z.string().email().nonempty(),
  dropdownData: z.string().nonempty({ message: "dropdown data is required" }),
  name: z.string().nonempty({ message: "Name is required" }),
  lastname: z.string().nonempty({ message: "Last Name is required" }),
  phone: PhoneSchema,
  additionalData: z
    .string()
    .nonempty({ message: "Additional Datais required" }),
});
