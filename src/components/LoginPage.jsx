import { useState } from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/user/userSlice";

const FAKE_USER = {
  name: "John Doe",
  email: "john@example.com",
  password: "qwerty",
};

function LoginPage() {
  const [email, setEmail] = useState(FAKE_USER.email);
  const [password, setPassword] = useState(FAKE_USER.password);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    if (!email || !password) return;
    e.preventDefault();
    dispatch(login(email, password));
    navigate("/");
  }

  return (
    <div className="w-full flex-col rounded-lg bg-white px-4 py-5">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="mb-5 text-center font-bold md:text-3xl">
          Please enter your login
        </h2>
        <div className="mt-1 flex items-center gap-4">
          <label className="w-1/3" htmlFor="email">
            Email address
          </label>
          <input
            className="focus:ring[2px w-2/3 rounded-md border border-indigo-400 p-2 outline-none focus:border-none focus:ring-[2px] focus:ring-indigo-500 focus:ring-offset-2"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {email !== FAKE_USER.email && (
          <p className="mb-8 w-2/4 self-end rounded-lg bg-red-200 px-2 py-1 text-center text-xs text-red-700">
            Please enter correct user name
          </p>
        )}

        <div className="mt-1 flex items-center gap-4">
          <label className="w-1/3" htmlFor="password">
            Password
          </label>
          <input
            className="focus:ring[2px w-2/3 rounded-md border border-indigo-400 p-2 outline-none focus:border-none focus:ring-[2px] focus:ring-indigo-500 focus:ring-offset-2"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {password !== FAKE_USER.password && (
          <p className="mb-8 w-2/4 self-end rounded-lg bg-red-200 px-2 py-1 text-center text-xs text-red-700">
            Please enter correct password
          </p>
        )}

        <div className="text-right">
          <Button type="small">Login</Button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
