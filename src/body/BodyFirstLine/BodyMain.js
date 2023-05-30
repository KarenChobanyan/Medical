import BodyFirstBox from "./BodyMainDivFirstBox";
import BodySecondBox from "./BodyMainDivSecondBox";

export default function BodyMain({menuState}){
    return(
        <div className="bodyMain">
            <BodyFirstBox/>
            <BodySecondBox userMenuState={menuState}/>
        </div>
    )
}