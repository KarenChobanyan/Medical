import { Link, useParams, useSearchParams } from "react-router-dom";
import NoteFirstLine from "./NoteFirstLine";
import NoteSecondLine from "./NoteSecondLine";
import { useContext } from "react";
import { DoctorList } from "../contexts/doctorList";
import { Doctor } from "../contexts/ExactDoctor";

export default function Note(props){
    const {id,aptDate,aptTime,image,name,surName,title,experience}=props
    const doctorList = useContext(Doctor)
    const checkedDoctor= doctorList[1]
  
    return(
        <Link to={`/note/${id}`} style={{textDecoration:"none"}}>
        <div className="note" key={id+31}  >
            <NoteFirstLine fulldate={aptDate} time={aptTime}/>
            <NoteSecondLine image={image} name={name} surName={surName} title={title} experince={experience}/>
        </div>
        </Link>
    )
}