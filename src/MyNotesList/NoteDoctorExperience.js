import { useContext } from "react"
import { Language } from "../contexts/langContext"

export default function NoteDoctorExperience({ experience }) {
    const translate = useContext(Language)
    const currentText = translate.Notes.noteBox.doctorExperience
    return (
        <div className="noteDoctorExperience">{currentText.experience} {experience} {currentText.year}</div>
    )
}