import React from "react";
import EmployerSignedOut from "./EmployerSignedOut"
import EmployerSignedIn from "./EmployerSignedIn"
import { useSelector } from "react-redux";


export default function EmployerLoginHeader() {
  const { authItem } = useSelector((state) => state.auth);
 

  return (
    <div className="bg-white ">
      <div className="h-16 container mx-auto  ">
        <div className="flex justify-between">
          <div className="flex justify-start">
            <div>
              <a href="http://localhost:3000/">
                <img
                  className="pt-3.5 pr-8 cursor-pointer"
                  src="https://aday-spage.mncdn.com/Knet_img_KnetLogo.ae2b40d.svg?v=p0930095816756"
                />
              </a>
            </div>
          </div>
          {authItem[0] .loggedIn? <EmployerSignedIn/>:<EmployerSignedOut/>}
          <div></div>
        </div>
      </div>
    </div>
  );
}
