import { Link } from "react-router-dom";
export default function WebsiteLogo() {
    return (
        <Link to="/">
            <div className="forMainLogo">
                <div className="mainLogo"></div>
            </div>
        </Link>
    )
}