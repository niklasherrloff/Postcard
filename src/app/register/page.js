import Link from "next/link";

export default function Register() {
  return (
    <div className="container">
      <h1 className="title">Register</h1>
      <form action="" className="register-form">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" />
        </div>
        <div className="buttom-div">
          <button className="btn-primary">Register</button>
          <Link href="/" className="text-link"></Link>
        </div>
      </form>
    </div>
  );
}
