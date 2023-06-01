import UserAvatar from "./UserAvatar";
import { useContext, useMemo, useState } from "react";
import UserFullName from "./UserFullName";
import ButtonUsersMenu from "./OpenUserProfileMenu";
import UsersMenu from "./UsersProfile";
import  Users  from "../../local/Users.json";
import { NoteLanguage } from "../../contexts/NoteLanguage";

export default function User({ userMenuHandler, state }) {
    const language = useContext(NoteLanguage)
    
    const currentUser = useMemo(()=>{
        function setAvatar(name) {
            let firstLetter = name[0]
            return firstLetter
        }
        return {
            name:Users.name.en,
            surName:Users.surName.en,
            avatar: setAvatar(Users.name.en)
        }
    })

    return (
        <div className="userMainDiv">
            <UserAvatar letter={currentUser.avatar} />
            <UserFullName name={currentUser.name} surName={currentUser.surName} />
            <ButtonUsersMenu buttonHandler={userMenuHandler} state={state} />
        </div>
    )
}