import BlueEffectDiv from "./BlueEfectDiv";
import UsersMenu from "../../Header/User/UsersProfile";

export default function BodySecondBox({userMenuState}){
    return(
        <div className="bodyMainSecondBox">
            <UsersMenu state={userMenuState}/>
            <BlueEffectDiv/>
        </div>
    )
}