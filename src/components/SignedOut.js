import React from "react";
import { NavLink } from "react-router-dom";


export default function SignedOut() {
  return (
    <div>
      <button className="mr-4 h-10 w-32 border-2 border-cyan-200 font-semibold  bg-neutral-50 rounded text-cyan-300 hover:bg-cyan-300 hover:text-white">
        İlan Paketi Al
      </button>{" "}
      <NavLink to={"/aday/giris"}>
        <button className=" bg-purple-700 hover:bg-purple-800 border rounded-lg h-10 w-32 text-white font-semibold">
          Giriş Yap
        </button>
      </NavLink>
      <NavLink to={"/aday/uyeol"}>
        <button className=" bg-purple-700 hover:bg-purple-800 border rounded-lg h-10 w-32 text-white font-semibold">
          Üye Ol
        </button>
      </NavLink>
    </div>
  );
}
