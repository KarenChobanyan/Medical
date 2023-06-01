import { useContext } from "react";
import ExactDoctorProfileImage from "./ExactDoctorProfileImage";
import { Doctor } from "../contexts/ExactDoctor";
import ExactDoctorInfoSheet from "./ExactDoctorInfoSheet";
import { NoteLanguage } from "../contexts/NoteLanguage";
import { CountDoctorExperience } from "../contexts/DoctorExperience";
import { Language } from "../contexts/langContext";
import { useMemo } from "react";

export default function ExactDoctorProfile() {
    const language = useContext(NoteLanguage)
    const [doctor] = useContext(Doctor);
    const countExperince = useContext(CountDoctorExperience)
    const translation = useContext(Language)
   
    const exactDoctor = useMemo(()=>{
        return {
            profileImage : doctor.profile_image,
            name : doctor.first_name.en,
            surName : doctor.last_name.en,
            title : doctor.user_categories[0].category.title,
            doctorsExperience : countExperince(doctor.excperience_start_year),
            experienceText : translation.Notes.noteBox.doctorExperience.experience,
            yearText : translation.Notes.noteBox.doctorExperience.year
        }
    },[doctor,translation])


    return (
        <div className="exactDoctorprofile">
            <ExactDoctorProfileImage image={exactDoctor.profileImage} />
            <ExactDoctorInfoSheet
                name={exactDoctor.name}
                surName={exactDoctor.surName}
                title={language == "ru" ? exactDoctor.title.ru : exactDoctor.title.en}
                experience={`${exactDoctor.experienceText}  ${exactDoctor.doctorsExperience} ${exactDoctor.yearText}`}
            />
        </div>
    )
}