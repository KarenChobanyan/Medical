import { useContext } from "react"
import * as MyList from "./data.json"
// import { CheckLanguage } from "./contexts/CheckLanguageContext"
export default function Show(){
    // const y = useContext(CheckLanguage)
    function logi(){

        console.log(1)
    }
    return(
        <div onClick={(logi)}>Click</div>
    )
}