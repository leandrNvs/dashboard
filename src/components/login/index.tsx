import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";
import { ElementType } from "react";
import Submit from "../submit";

interface IInputControl {
  Icon: ElementType;
  label: string;
  type?: string;
  name: string;
}

const InputControl = ({ Icon, label, name, type = "text" }: IInputControl) => {
  return (
    <div className="flex items-center bg-gray-900">
      <Icon className="text-2xl mx-2 text-white" />
      <input
        type={type}
        name={name}
        className="h-14 outline-none flex-1 bg-transparent text-white"
        aria-label={label}
      />
    </div>
  );
};

export default function Login() {
  return (
    <form className="bg-gray-800 p-8 flex gap-8 flex-col w-screen max-w-md">
      <h1 className="text-center text-white font-bold uppercase text-2xl">
        Login
      </h1>
      <InputControl Icon={BiSolidUser} label="Username" name="username" />
      <InputControl
        Icon={BiSolidLockAlt}
        label="Password"
        type="password"
        name="password"
      />
      <Submit
        text="Sign in"
        className="bg-green-700 h-12 disabled:bg-green-300"
      />
    </form>
  );
}
