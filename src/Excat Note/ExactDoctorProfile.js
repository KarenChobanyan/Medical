import { useContext } from "react";
import ExactDoctorProfileImage from "./ExactDoctorProfileImage";
import { Doctor } from "../contexts/ExactDoctor";
import ExactDoctorInfoSheet from "./ExactDoctorInfoSheet";
import { NoteLanguage } from "../contexts/NoteLanguage";
import { CountDoctorExperience } from "../contexts/DoctorExperience";
import { Language } from "../contexts/langContext";

export default function ExactDoctorProfile() {
    const language = useContext(NoteLanguage)
    const [doctor] = useContext(Doctor);
    const profileImage = doctor.profile_image
    const name = doctor.first_name
    const surName = doctor.last_name
    const title = doctor.user_categories[0].category.title
    const countExperince = useContext(CountDoctorExperience)
    const startDate = doctor.excperience_start_year
    const doctorsExperience = countExperince(startDate)
    const translation = useContext(Language)
    const experienceText = translation.Notes.noteBox.doctorExperience.experience
    const yearText = translation.Notes.noteBox.doctorExperience.year


    return (
        <div className="exactDoctorprofile">
            <ExactDoctorProfileImage image={profileImage} />
            <ExactDoctorInfoSheet
                name={language == "ru" ? name.ru : name.en}
                surName={language == "ru" ? surName.ru : surName.en}
                title={language == "ru" ? title.ru : title.en}
                experience={`${experienceText}  ${doctorsExperience} ${yearText}`}
            />
        </div>
    )
}