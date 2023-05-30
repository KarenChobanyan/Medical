import UserAvatar from "./UserAvatar";
import { useContext, useState } from "react";
import UserFullName from "./UserFullName";
import ButtonUsersMenu from "./OpenUserProfileMenu";
import UsersMenu from "./UsersProfile";
import  Users  from "../../local/Users.json";
import { NoteLanguage } from "../../contexts/NoteLanguage";

export default function User({ userMenuHandler, state }) {
    const language = useContext(NoteLanguage)
    const currentUser = Users
    function setAvatar(name) {
        let firstLetter = name[0]
        return firstLetter
    }
    const userName = (language == "ru" ? currentUser.name.ru : currentUser.name.en)
    const userSurName = (language == "ru" ? currentUser.surName.ru : currentUser.surName.en)

    return (
        <div className="userMainDiv">
            <UserAvatar letter={setAvatar(userName)} />
            <UserFullName name={userName} surName={userSurName} />
            <ButtonUsersMenu buttonHandler={userMenuHandler} state={state} />
            {/* <UsersMenu state={visibility}/> */}
        </div>
    )
}