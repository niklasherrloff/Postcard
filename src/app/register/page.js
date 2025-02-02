"use client";

import { useActionState } from "react";
import { register } from "../actions/auth";
import Link from "next/link";

export default function Register() {
  console.clear();
  const [state, action, isPending] = useActionState(register, undefined);

  console.log(isPending);

  return (
    <div className="container">
      <h1 className="title">Register</h1>
      <form action={action} className="register-form">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" defaultValue={state?.email} />
          {state?.errors?.email && (
            <p className="error">{state.errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          {state?.errors?.password && (
            <div className="error">
              <p>Password must:</p>
              <ul className="error-list">
                {state.errors.password.map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" />
          {state?.errors?.confirmPassword && (
            <p className="error">{state.errors.confirmPassword}</p>
          )}
        </div>
        <div className="buttom-div">
          <button disabled={isPending} className="btn-primary">
            {isPending ? "Loading..." : "Register"}
          </button>
          <Link href="/" className="text-link">
            or login here
          </Link>
        </div>
      </form>
    </div>
  );
}
