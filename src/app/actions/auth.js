"use server";

export async function register(state, formData) {
  console.log("register action called");

  await new Promise((resolve) =>
    setTimeout(resolve, 500)
  ); /** Niklas, delete later, just testing */

  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  console.log(email);
  console.log(password);
  console.log(confirmPassword);
}
