import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
  let btnName = "Login";

  const [btnNamereact, setbtnNamereact] = useState("Login");

  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} alt="" className="logo" />
      </div>

      <div className="navitem">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button
              className="login btn btn-info"
              onClick={() => {
                btnNamereact === "Login"
                  ? setbtnNamereact("Logout")
                  : setbtnNamereact("Login");
              }}
            >
              {btnNamereact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

/* We can have nammed and default export for same component and can import using any of the import method **Normal import & {import inside}** */
