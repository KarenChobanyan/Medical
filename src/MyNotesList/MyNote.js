import MyNotesList from "./MyNotesList";
import UsersMenu from "../Header/User/UsersProfile";

export default function MyNote({state}){
  return (
    <div className="myNote">
        <UsersMenu state={state}/>
        <MyNotesList/>
    </div>
  )
}