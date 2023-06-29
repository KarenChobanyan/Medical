import { useTranslation } from "react-i18next";
import ButtonForApt from "./ButtonForAppointment";
import AppointThinText from "./appointThinText";
import AppointBoldText from "./appointmentBoldtext";
import AppListText from "./appointmentListtext";

export default function AppTextDiv(){
    const {t} = useTranslation();

    return (
        <div className="appTextDiv">
            <AppointBoldText text={t(`Body.bodySecondSection.header`)}/>
            <AppointThinText text={t(`Body.bodySecondSection.underHeader`)}/>
            <AppListText/>
            <ButtonForApt text={t(`Body.bodySecondSection.buttonText`)}/>
        </div>
    )
}