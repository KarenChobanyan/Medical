import NoteDoctorProfileImage from "./NoteDoctorImage";
import NoteDoctorName from "./NoteDoctorName";
import NoteDoctorTitle from "./NoteDoctorTitle";
import NoteDoctorExperience from "./NoteDoctorExperience"
import NoteBlueButton from "./NoteBlueButton";
import NoteWhiteButton from "./NoteWhiteButton"
import { useContext } from "react";
import { Language } from "../contexts/langContext";

export default function NoteSecondLine({ image, name, surName, title, experince }) {
    const translate = useContext(Language)
    const currentText = translate.Notes.noteBox
    return (
        <div className="noteSecondlineDiv">
            <div className="noteDoctorInfoSheet" >
                <NoteDoctorProfileImage image={image} />
                <div className="noteDoctorInfo">
                    <NoteDoctorName name={name} surName={surName} />
                    <NoteDoctorTitle title={title} />
                    <NoteDoctorExperience experience={experince} />
                </div>
            </div>
            <div className="noteButtonDiv">
                <NoteBlueButton text={currentText.blueButton} />
                <NoteWhiteButton text={currentText.whiteButton} />
            </div>
        </div>
    )
}