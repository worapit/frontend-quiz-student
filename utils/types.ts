import * as z from "zod";

export const Donation = z.object({
  id: z.string(),
  firstName: z.string().min(1, { message: "Missing firstName" }),
  lastName: z.string().min(1, { message: "Missing firstName" }),
  email: z.string().email({ message: "Invalid Email" }),
  amount: z.number().min(1000, { message: "Not enough" }),
  time: z.string(),
});

