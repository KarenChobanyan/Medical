import { useContext } from "react";
import Nav from "./Nav";
import { Language } from "../contexts/langContext";

export default function Navigations() {
    const Translate = useContext(Language)
    return (
        <div className="forNavigations">
            <Nav text={Translate.HeaderTexts.firstNav} />
            <Nav text={Translate.HeaderTexts.secondNav} />
            <Nav text={Translate.HeaderTexts.thirdNav} />
        </div>
    )
}