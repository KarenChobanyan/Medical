import FooterFirstColsocialIkon from "./FooterFirstColSocialIkons"
import FooterMainLogo from "./FooterMainLogo"
import FooterFirstColThinText from "./FooterfirstColThinText"
import faceBookIkon from "../../Img/Footer/FaceBook.png"
import instagramIkon from "../../Img/Footer/Instagram.png"
import youTubeIkon from "../../Img/Footer/Youtube.png"
import FooterSecondColText from "./FooterSecondColText"
import FooterThirdColElement from "./FooterThirdColEl"
import Message from "../../Img/Footer/Message.png"
import Location from "../../Img/Footer/Location.png"
import Clock from "../../Img/Footer/Clock.png"
import Phone from "../../Img/Footer/Phone.png"
import { useContext } from "react"
import { Language } from "../../contexts/langContext"

export default function Footer(){
    const translate = useContext(Language)
    const currentText = translate.Footter
    return(
        <div className="footer">
            <div className="footerFirstCol">
          <FooterMainLogo />
          <FooterFirstColThinText text={currentText.firstBox.firstLine}/>
          <FooterFirstColThinText text={currentText.firstBox.secondLine}/>
          <div className="footerFirstColSocialIkonDiv">
            <FooterFirstColsocialIkon image={instagramIkon}/>
            <FooterFirstColsocialIkon image={faceBookIkon}/>
            <FooterFirstColsocialIkon image={youTubeIkon}/>
          </div>
            </div>
            <div className="footerSecondCol">
                <FooterSecondColText text={currentText.secondBox.firstLine}/>
                <FooterSecondColText  text={currentText.secondBox.secondLine}/>
                <FooterSecondColText  text={currentText.secondBox.thirdLine}/>
                <FooterSecondColText  text={currentText.secondBox.forthLine}/>
                <FooterSecondColText  text={currentText.secondBox.fifthLine}/>
                <FooterSecondColText  text={currentText.secondBox.sixthLine}/>
            </div>
            <div className="footerThirdCol">
                <FooterThirdColElement image={Message} text={currentText.thirdBox.email}/>
                <FooterThirdColElement image={Location} text={currentText.thirdBox.adress}/>
                <FooterThirdColElement image={Clock} text={currentText.thirdBox.workingTime}/>
                <FooterThirdColElement image={Phone} text={currentText.thirdBox.phoneNumber}/>
            </div>
        </div>
    )
}