import { NavItems } from "../constants";
import { Logo } from "../assets";
import { PlainButton } from "./index";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container mx-auto my-5 px-5">
      <div className="flex justify-between items-center">
        {/* Logo Part */}
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-extra-bold">Jal Mitra</h2>
          <img
            src={Logo}
            alt="Logo of Jal Mitra website"
            className="h-[25px] w-[25px] ml-2"
          />
        </div>

        {/* Navigation Items */}
        <ul className="hidden md:flex space-x-5">
          {NavItems.map((item) => (
            <li key={item.id} className="font-medium text-base tracking-wide">
              <a href={`#${item.href}`} className="hover:text-blue-600 transition duration-150">{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex justify-between items-center space-x-5">
          <PlainButton label="Login" onClick={() => { }} />
          <PlainButton label="Sign Up" onClick={() => { }} />
        </div>

        <div
          className="block md:hidden"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}

          {toggle ?
            <div className={`${toggle ? 'flex' : `hidden`} p-6 bg-blue-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl flex-col`}>
              <ul className="flex flex-col text-center">
          {NavItems.map((item) => (
            <li key={item.id} className="font-medium text-base tracking-wide">
              <a href={`#${item.href}`} className="hover:text-blue-600 transition duration-150">{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex mt-2 space-x-2">
          <PlainButton label="Login" onClick={() => { }} />
          <PlainButton label="Sign Up" onClick={() => { }} />
        </div>
            </div> 
          : null}


        </div>
      </div>
    </div>
  );
}

export default Navbar;
