import NoteDateInfo from "./NoteDateInfo";
import DateIkon from "../Img/NoteListIkons/Vector.png"
import ClockIkon from "../Img/NoteListIkons/ClockIkon.png"
import VideoCallIkon from '../Img/NoteListIkons/video-camera (1) 1.png'
import { useCallback, useContext, useState } from "react";
import { Language } from "../contexts/langContext";


export default function NoteFirstLine({ fulldate, time }) {
    const translate = useContext(Language)
    const currentText = translate.Notes.noteBox
    const [noteState, setNoteState] = useState(false)
    const hendlerNoteState = useCallback((event)=>{
        event.bubbles = false
        if (noteState == false) {
            setNoteState(true)
        } else {
            setNoteState(false)
        }
    },[noteState])
    return (
        <div className="noteFirstLine">
            <div className="noteDate">
                <NoteDateInfo image={DateIkon} text={fulldate} />
                <NoteDateInfo image={ClockIkon} text={time} />
                <NoteDateInfo image={VideoCallIkon} text={currentText.textIkonVideocall} />
            </div>
            <div className={noteState == false ? "noteScheduled" : "noteDone"} onClick={hendlerNoteState}>{noteState == false ? currentText.buttonScheduled.scheduled : currentText.buttonScheduled.done}</div>
        </div>
    )
}