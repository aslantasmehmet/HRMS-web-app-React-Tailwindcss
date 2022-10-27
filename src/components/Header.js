import React from "react";
import { useSelector } from "react-redux";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Header() {
  
  const { authItem } = useSelector((state) => state.auth);
 

 
  return (
    <div className="bg-white ">
      <div className="h-16 container mx-auto  ">
        <div className="flex justify-between">
          <div className="flex justify-start">
            <div >
              <a href="http://localhost:3000/">
                <img
                  className="pt-3.5 pr-8 cursor-pointer"
                  src="https://aday-spage.mncdn.com/Knet_img_KnetLogo.ae2b40d.svg?v=p0930095816756"
                />
              </a>
            </div>

            <div className="pr-8 pt-3.5 font-semibold text-lg hover:text-purple-700  cursor-pointer ">
              İş Ara
            </div>

            <div className="pr-8 pt-3.5 font-semibold text-lg">
              Kariyer Planlaması
            </div>

            <div className="pt-3.5 font-semibold text-lg">Kariyer Rehberi</div>
          </div>
          <div className="pl-56 pt-3.5 flex justify-end ">
            <>
            {authItem[0] .loggedIn? <SignedIn/>:<SignedOut/>}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
