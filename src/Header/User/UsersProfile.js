import UseerMenuOption from "./UserMenuOption";
import UserIkon from "../../Img/UserIkon/user (3) 1.png"
import Card from "../../Img/UserIkon/credit-card (3) 1.png"
import HelpIkon from "../../Img/UserIkon/help (1) 1.png"
import LogOutIkon from "../../Img/UserIkon/logout (1) 1.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function UsersMenu({ state }) {
    const {t} = useTranslation()

    return (

        <div className="userMenuBoxPosition">
            <div className={state == true ? "userMenu" : "hidden"}>
                <Link style={{ all: "initial" }}>
                    <UseerMenuOption image={UserIkon} text={t(`UserMenu.myProfile`)} />
                </Link>
                <Link to="/userBalance" style={{ all: "initial" }}>
                    <UseerMenuOption image={Card} text={t(`UserMenu.balance`)} />
                </Link>
                <Link style={{ all: "initial" }}>
                    <UseerMenuOption image={HelpIkon} text={t(`UserMenu.faq`)} />
                </Link>
                <Link style={{ all: "initial" }}>
                    <UseerMenuOption image={LogOutIkon} text={t(`UserMenu.logOut`)} />
                </Link>
            </div>
        </div>
    )
}