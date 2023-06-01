import NoteFirstLine from "./NoteFirstLine";
import NoteSecondLine from "./NoteSecondLine";
import { useContext, useMemo } from "react";
import { CountDoctorExperience } from "../contexts/DoctorExperience";
import { NoteLanguage } from "../contexts/NoteLanguage";

export default function Note({ doctor }) {
    const countExperience = useContext(CountDoctorExperience)
    const language = useContext(NoteLanguage)

    const exactDoctor = useMemo(() => {

        function getDate(fullDate) {
            const date = fullDate.slice(0, 10)
            return date
        };

        function getTime(fulltime) {
            const time = fulltime.slice(11, 16)
            return time
        };

        return {
            key: doctor.id + Math.random(),
            fulldate: getDate(doctor.near_date),
            time: getTime(doctor.near_date),
            image: doctor.profile_image,
            name: doctor.first_name,
            surName: doctor.last_name,
            experience: countExperience(doctor.excperience_start_year),
            title: doctor.user_categories[0].category.title
        }
    }, [doctor])


    return (

        <div className="note" key={exactDoctor.key} >
            <NoteFirstLine fulldate={exactDoctor.fulldate} time={exactDoctor.time} />
            <NoteSecondLine
                image={exactDoctor.image}
                name={exactDoctor.name.en}
                surName={exactDoctor.surName.en}
                title={language == "ru" ? exactDoctor.title.ru : exactDoctor.title.en}
                experince={exactDoctor.experience}
                id={doctor.id}
            />
        </div>
    )
}