import NoteDateInfo from "./NoteDateInfo";
import DateIkon from "../Img/NoteListIkons/Vector.png"
import ClockIkon from "../Img/NoteListIkons/ClockIkon.png"
import VideoCallIkon from '../Img/NoteListIkons/video-camera (1) 1.png'
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";


export default function NoteFirstLine({ fulldate, time }) {
    const { t } = useTranslation()
    const [noteState, setNoteState] = useState(false)
    const hendlerNoteState = useCallback((event) => {
        event.bubbles = false
        if (noteState == false) {
            setNoteState(true)
        } else {
            setNoteState(false)
        }
    }, [noteState])
    return (
        <div className="noteFirstLine">
            <div className="noteDate">
                <NoteDateInfo image={DateIkon} text={fulldate} />
                <NoteDateInfo image={ClockIkon} text={time} />
                <NoteDateInfo image={VideoCallIkon} text={t(`Notes.noteBox.textIkonVideocall`)} />
            </div>
            <div className={noteState == false ? "noteScheduled" : "noteDone"} onClick={hendlerNoteState}>{noteState == false ? t(`Notes.noteBox.buttonScheduled.scheduled`) : t(`Notes.noteBox.buttonScheduled.done`)}</div>
        </div>
    )
}