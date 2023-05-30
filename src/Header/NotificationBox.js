import NoteIkon from "./NotificationIkon";
import { useState } from "react";

export default function NoteBox() {
    const [count, setCount] = useState(0)
    return (
        <div className="noteBox">
            <div className="noteCount">{count}</div>
            <NoteIkon />
        </div>
    )
}