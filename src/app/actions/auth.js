"use server";

import { RegisterFormSchema } from "@/lib/rules";

export async function register(state, formData) {
  console.log("register action called");

  //   await new Promise((resolve) =>
  //     setTimeout(resolve, 500)
  //   ); /** Niklas, delete later, just testing */

  const validatedFields = RegisterFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  console.log(validatedFields);

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      email: formData.get("email"),
    };
  }

  console.log(validatedFields);
}
