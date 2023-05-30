export default function FooterThirdColElement({image,text}){
    return(
        <div className="forFooterThirdElements">
            <div className="footerThirdColIkon" style={{backgroundImage:`url(${image})`}}></div>
            <div className="footerThirdColText">{text}</div>
        </div>
    )
}