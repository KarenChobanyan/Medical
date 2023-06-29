import { useTranslation } from "react-i18next";
import AppListLine from "./AppListLine";

export default function AppListText(){
    const {t} = useTranslation()

    return(
        <div className="appListTextBox">
            <AppListLine text={t(`Body.bodySecondSection.aptList.firstLine`)}/>
            <AppListLine text={t(`Body.bodySecondSection.aptList.secondLine`)}/>
            <AppListLine text={t(`Body.bodySecondSection.aptList.thirdLine`)}/>
        </div>
    )
}