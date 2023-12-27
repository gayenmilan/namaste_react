import { LOGO_URL } from "../utils/constants";

export const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={LOGO_URL} alt="" className="logo"/>
            </div>

            <div className="navitem">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

/* We can have nammed and default export for same component and can import using any of the import method **Normal import & {import inside}** */