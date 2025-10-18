import { z } from "zod";

export const userNameValidation = z

  .string()
  .min(6, "User name must be at least 6 characters long")
  .max(20, "User name must be at most 20 characters long")
  .regex(/^[a-zA-Z0-9]+$/, "User name must contain only letters and numbers");

export const signUpSchema = z.object({
  usserName: userNameValidation,
  email: z.email({ message: "Please use a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
