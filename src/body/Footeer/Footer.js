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
import { useTranslation } from "react-i18next"

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="footerFirstCol">
                <FooterMainLogo />
                <FooterFirstColThinText text={t(`Footter.firstBox.firstLine`)} />
                <FooterFirstColThinText text={t(`Footter.firstBox.secondLine`)} />
                <div className="footerFirstColSocialIkonDiv">
                    <FooterFirstColsocialIkon image={instagramIkon} />
                    <FooterFirstColsocialIkon image={faceBookIkon} />
                    <FooterFirstColsocialIkon image={youTubeIkon} />
                </div>
            </div>
            <div className="footerSecondCol">
                <FooterSecondColText text={t(`Footter.secondBox.firstLine`)} />
                <FooterSecondColText text={t(`Footter.secondBox.secondLine`)} />
                <FooterSecondColText text={t(`Footter.secondBox.thirdLine`)} />
                <FooterSecondColText text={t(`Footter.secondBox.forthLine`)} />
                <FooterSecondColText text={t(`Footter.secondBox.fifthLine`)} />
                <FooterSecondColText text={t(`Footter.secondBox.sixthLine`)} />
            </div>
            <div className="footerThirdCol">
                <FooterThirdColElement image={Message} text={t(`Footter.thirdBox.email`)} />
                <FooterThirdColElement image={Location} text={t(`Footter.thirdBox.adress`)} />
                <FooterThirdColElement image={Clock} text={t(`Footter.thirdBox.email`)} />
                <FooterThirdColElement image={Phone} text={t(`Footter.thirdBox.phoneNumber`)} />
            </div>
        </div>
    )
}