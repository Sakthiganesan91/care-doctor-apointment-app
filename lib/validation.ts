import { z } from "zod";

export const patientFormSchema = z.object({
  name: z
    .string()
    .min(4, "Username must be atleast 4 characters")
    .max(50, "username exceeds 50 characters"),
  email: z.string().email("Invalid Email Address"),

  phone: z
    .string()
    .refine(
      (phone) => /^\+?[1-9]\d{1,14}$/.test(phone),
      "Invalid Phone Number"
    ),
});
