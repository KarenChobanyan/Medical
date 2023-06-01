import { useContext } from "react";
import DoctorPageNav from "./DoctorPageNav";
import { NoteLanguage } from "../contexts/NoteLanguage";
import { Doctor } from "../contexts/ExactDoctor";
import DoctorPageNavArrow from "./DoctorPageNavArrow";
import { useParams } from "react-router-dom";

export default function ExactDoctorMainDivNav({ text }) {
    const [doctor] = useContext(Doctor)
    const doctorTitle = doctor.user_categories[0].category.title
    const translation = useContext(NoteLanguage)
    return (
        <div className="exactDoctorMainDivNav" >
            <DoctorPageNav text={translation == "ru" ? "Врачи" : "Doctors"} />
            <DoctorPageNavArrow />
            <DoctorPageNav text={translation == "ru" ? doctorTitle.ru : doctorTitle.en} />
            <DoctorPageNavArrow />
            <DoctorPageNav text={translation == "ru" ? "Профиль врача" : "Doctor Profile"} />
        </div>

    )
}