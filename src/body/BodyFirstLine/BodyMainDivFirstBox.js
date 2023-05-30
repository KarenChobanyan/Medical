import { useContext } from "react";
import BlueButton from "./BlueButton";
import WhiteButton from "./WhiteButton";
import { Language } from "../../contexts/langContext";

export default function BodyFirstBox(){
    const language = useContext(Language)
    const currentText = language.Body.bodyFirtSection
    return(
        <div className="bodyMainFirstBox">
            <div className="bodyMainBoldText"><span className="mainBoldUnderline">{currentText. boldText.underLine}</span>{currentText. boldText.ordinary}</div>
            <div className="bodyMainThinText">{currentText.thinText.ordinaryFirst} <span className="mainThinTextUnderline"> {currentText.thinText.underLinePartOne} </span>{currentText.thinText.ordinaryMiddle}<span className="mainThinTextUnderline"> {currentText.thinText.underLinePartTwo} </span>{currentText.thinText.ordinaryLast} <span className="mainThinTextLink"> App Store</span> и <span className="mainThinTextLink">Google Play</span></div>
            <div className="bodyMainButtonBox">
                <WhiteButton text={currentText. whiteButtonText}/>
                <BlueButton text={currentText. blueButtonText}/>
            </div>
        </div>
    )
}