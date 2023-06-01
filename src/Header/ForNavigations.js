import { useContext } from "react";
import Nav from "./Nav";
import { Language } from "../contexts/langContext";
import { Link, useParams } from "react-router-dom";

export default function Navigations() {
    const Translate = useContext(Language)
    
    return (
        <div className="forNavigations">
            <Nav text={Translate.HeaderTexts.firstNav} />
            <Link to = {"/myNotes"} style={{textDecoration:"none"}}>
            <Nav text={Translate.HeaderTexts.secondNav} />
            </Link>
            <Nav text={Translate.HeaderTexts.thirdNav} />
        </div>
    )
}