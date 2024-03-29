import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import { userLogout } from "../store/actions/authActions";

export default function SignedIn(userType) {
  const { authItem } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (user) => {
    dispatch(userLogout(user));
    navigate("/");
  };

  return (
    <div className="mr-6 ml-72">
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="data:image/jpeg;base64,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"
        />

        <Dropdown pointing="top right" text={authItem[0].user.name}>
          <Dropdown.Menu>
            {authItem[0].user.userType === 1 ? (
              <Dropdown.Item as={Link} to="/aday/profile">
                Profile
              </Dropdown.Item>
            ):(<Dropdown.Item as={Link} to="/aday/profile">
            isveren Profile
          </Dropdown.Item>)}
            <Dropdown.Item>Özgeçmiş Güncelle</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLogout(authItem[0].user)}>
              Çıkış Yap
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
