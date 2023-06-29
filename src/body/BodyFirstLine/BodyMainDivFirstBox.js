import { useTranslation } from "react-i18next";
import BlueButton from "./BlueButton";
import WhiteButton from "./WhiteButton";

export default function BodyFirstBox(){
    const {t} = useTranslation()
    return(
        <div className="bodyMainFirstBox">
            <div className="bodyMainBoldText"><span className="mainBoldUnderline">{t(`Body.bodyFirtSection.boldText.underLine`)}</span>{t(`Body.bodyFirtSection.boldText.ordinary`)}</div>
            <div className="bodyMainThinText">{t(`Body.bodyFirtSection.thinText.ordinaryFirst`)} <span className="mainThinTextUnderline"> {t(`Body.bodyFirtSection.thinText.underLinePartOne`)} </span>{t(`Body.bodyFirtSection.thinText.ordinaryMiddle`)}<span className="mainThinTextUnderline"> {t(`Body.bodyFirtSection.thinText.underLinePartTwo`)} </span>{t(`Body.bodyFirtSection.thinText.ordinaryLast`)} <span className="mainThinTextLink"> App Store</span> и <span className="mainThinTextLink">Google Play</span></div>
            <div className="bodyMainButtonBox">
                <WhiteButton text={t(`Body.bodyFirtSection.whiteButtonText`)}/>
                <BlueButton text={t(`Body.bodyFirtSection.blueButtonText`)}/>
            </div>
        </div>
    )
}