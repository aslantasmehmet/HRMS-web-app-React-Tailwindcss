import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedOut() {
  return (
    <div>
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
