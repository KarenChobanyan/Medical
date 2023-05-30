import UsersMenu from "../Header/User/UsersProfile";
import ExactDoctorMainDivNav from "./ExactDoctorMainDivNav";
import ExactDoctorMainDivProfile from "./ExactDoctorMainDivProfile";

export default function ExcatDoctorMainDiv({state}){
    return(
      <div className="exactDocorMainDiV">
           <UsersMenu state={state}/>
           <ExactDoctorMainDivNav/>
           <ExactDoctorMainDivProfile/>
      </div>
    )
}