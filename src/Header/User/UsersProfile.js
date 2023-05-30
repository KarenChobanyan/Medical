import UseerMenuOption from "./UserMenuOption";
import UserIkon from "../../Img/UserIkon/user (3) 1.png"
import Card from "../../Img/UserIkon/credit-card (3) 1.png"
import HelpIkon from "../../Img/UserIkon/help (1) 1.png"
import LogOutIkon from "../../Img/UserIkon/logout (1) 1.png"
import { useContext } from "react";
import { Language } from "../../contexts/langContext";
import { Link } from "react-router-dom";

export default function UsersMenu({ state }) {
    const TranslatedText = useContext(Language)

    return (

        <div className="userMenuBoxPosition">
            <div className={state == true ? "userMenu" : "hidden"}>
                <Link style={{ all: "initial" }}>
                    <UseerMenuOption image={UserIkon} text={TranslatedText.UserMenu.myProfile} />
                </Link>
                <Link to="/userBalance" style={{ all: "initial" }}>
                    <UseerMenuOption image={Card} text={TranslatedText.UserMenu.balance} />
                </Link>
                <Link style={{ all: "initial" }}>
                    <UseerMenuOption image={HelpIkon} text={TranslatedText.UserMenu.faq} />
                </Link>
                <Link style={{ all: "initial" }}>
                    <UseerMenuOption image={LogOutIkon} text={TranslatedText.UserMenu.logOut} />
                </Link>
            </div>
        </div>
    )
}