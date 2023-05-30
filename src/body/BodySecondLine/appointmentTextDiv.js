import { useContext } from "react";
import ButtonForApt from "./ButtonForAppointment";
import AppointThinText from "./appointThinText";
import AppointBoldText from "./appointmentBoldtext";
import AppListText from "./appointmentListtext";
import { Language } from "../../contexts/langContext";

export default function AppTextDiv(){
    const translate = useContext(Language)
    const currentText = translate.Body.bodySecondSection
    return (
        <div className="appTextDiv">
            <AppointBoldText text={currentText.header}/>
            <AppointThinText text={currentText. underHeader}/>
            <AppListText/>
            <ButtonForApt text={currentText.buttonText}/>
        </div>
    )
}