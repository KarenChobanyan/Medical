import NoteDoctorProfileImage from "./NoteDoctorImage";
import NoteDoctorName from "./NoteDoctorName";
import NoteDoctorTitle from "./NoteDoctorTitle";
import NoteDoctorExperience from "./NoteDoctorExperience"
import NoteBlueButton from "./NoteBlueButton";
import NoteWhiteButton from "./NoteWhiteButton"
import { useContext } from "react";
import { Language } from "../contexts/langContext";
import { Link } from "react-router-dom";

export default function NoteSecondLine(props) {
    const {image, name, surName, title, experince,id}  = props
    const translate = useContext(Language)
    const currentText = translate.Notes.noteBox
    return (
        <div className="noteSecondlineDiv" >
            <div className="noteDoctorInfoSheet" >
                <NoteDoctorProfileImage image={image} />
                <div className="noteDoctorInfo">
                    <NoteDoctorName name={name} surName={surName} />
                    <NoteDoctorTitle title={title} />
                    <NoteDoctorExperience experience={experince} />
                </div>
            </div>
            <div className="noteButtonDiv">
                <Link to={`/note/${id}`} style={{ textDecoration: "none" }}>
                <NoteBlueButton text={currentText.blueButton} />
                </Link>
                <NoteWhiteButton text={currentText.whiteButton} />
            </div>
        </div>
    )
}