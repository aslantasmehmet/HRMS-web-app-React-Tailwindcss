import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userLogout } from "../store/actions/authActions";
import SignedInEmployer from "./SignedInEmployer";
import SignedOutEmployer from "./SignedOutEmployer";

export default function Header() {
  const { authItem } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (user) => {
    dispatch(userLogout(user));
    navigate("/");
  };

  return (
    <div className="bg-white ">
      <div className="h-16 container mx-auto  ">
        <div className="flex justify-between">
          <div className="flex justify-start">
            <div>
              <img
                onClick={() => handleLogout(authItem[0].user)}
                className="pt-3.5 pr-8 cursor-pointer"
                src="https://aday-spage.mncdn.com/Knet_img_KnetLogo.ae2b40d.svg?v=p0930095816756"
              />
            </div>
          </div>
          <div className="pl-96 pt-3.5 flex justify-end ">
            <>
              {authItem[0].loggedIn ? (
                <SignedInEmployer />
              ) : (
                <SignedOutEmployer />
              )}
            </>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
