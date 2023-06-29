import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"

export default function Navigations() {
    const { t } = useTranslation()
    return (
        <div className="forNavigations">
            <Nav text={t(`HeaderTexts.firstNav`)} />
            <Link to={"/myNotes"} style={{ textDecoration: "none" }}>
                <Nav text={t(`HeaderTexts.secondNav`)} />
            </Link>
            <Nav text={t(`HeaderTexts.thirdNav`)} />
        </div>
    )
}