import React from "react";
import { NavLink } from "react-router-dom";


export default function SignedOut() {
  return (
    <div>
     
      <NavLink to={"/isveren/kayıt"}>
        <button className="ml-96 hover:text-white hover:bg-brand-color border border-brand-color rounded-lg h-10 w-40 text-brand-color font-semibold">
          Ücretsiz Kayıt Ol
        </button>
      </NavLink>
      
      
    </div>
  );
}