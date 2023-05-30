import { useContext } from "react";
import AppListLine from "./AppListLine";
import { Language } from "../../contexts/langContext";

export default function AppListText(){
    const translate = useContext(Language)
    const currentText = translate.Body.bodySecondSection.aptList
    return(
        <div className="appListTextBox">
            <AppListLine text={currentText.firstLine}/>
            <AppListLine text={currentText.secondLine}/>
            <AppListLine text={currentText.thirdLine}/>
        </div>
    )
}