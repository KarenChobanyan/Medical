import Navigations from "./ForNavigations";
import NoteBox from "./NotificationBox";
import Lang from "./SetLaguage/LanguageLine";
import User from "./User/UserProfile";
import WebsiteLogo from "./WebsiteLogo";

export default function Header({ setVisibilityFunction, state }) {
    return (
        <div className="headerPosition">
            <div className="header">
                <Lang />
                <div className="header2ndLine">
                    <WebsiteLogo />
                    <Navigations />
                    <NoteBox />
                    <User userMenuHandler={setVisibilityFunction} state={state} />
                </div>
            </div>
        </div>
    )
}