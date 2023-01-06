import React from 'react'
import { NavLink } from "react-router-dom";

export default function EmployerSignedOut() {
  return (
    <>
       <div className="ml-96 pt-3.5 flex justify-end ">
            <>
              <div>
                <NavLink to={"/isveren/kayıt"}>
                  <button className="ml-96 bg-brand-color hover:bg-purple-800 hover:text-white border-2 border-purple-700 rounded-lg h-10 w-32 text-white font-semibold">
                    Ücretsiz Kayıt Ol
                  </button>
                </NavLink>
              </div>
            </>
          </div>
    </>
  )
}
