import Note from "./Note";
import NoteListNavDiv from "./NoteListNavDiv";
import * as NoteList from "../data.json"
import { useContext } from "react";
import { NoteLanguage } from "../contexts/NoteLanguage";
import { DoctorList } from "../contexts/doctorList";
import { CountDoctorExperience } from "../contexts/DoctorExperience";

export default function MyNotesList() {
    const language = useContext(NoteLanguage)
    const list = { ...NoteList }
    const doctors = list.results
    const countExperience = useContext(CountDoctorExperience)

    function getDate(fullDate) {
        const date = fullDate.slice(0, 10)
        return date
    };
    function getTime(fulltime) {
        const time = fulltime.slice(11, 16)
        return time
    };

    
    return (
        <>
            <DoctorList.Provider value={doctors}>
                <div className="myNoteListMainDiv">
                    <NoteListNavDiv />
                    {doctors.map((el) => <Note
                        id={el.id}
                        aptDate={getDate(`${el.near_date}`)}
                        aptTime={getTime(`${el.near_date}`)}
                        image={el.profile_image}
                        name={language == "ru" ? el.first_name.ru : el.first_name.en}
                        surName={language == "ru" ? el.last_name.ru : el.last_name.en}
                        title={language == "ru" ? el.user_categories[0].category.title.ru : el.user_categories[0].category.title.en}
                        experience={countExperience(el.excperience_start_year)}
                    />)}
                </div>
            </DoctorList.Provider>
        </>
    )
}
