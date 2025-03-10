import * as React from "react";
import Textfield from "./Forms/Textfield/Textfield";
import Checkbox from "./Forms/Checkbox/Checkbox";
import { useState } from "react";


// interface IProps {
// label: string
// value: number
// }

const GurpsCalculator: React.FC<{}> = (


) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false)
return (

        <div>
            
            Gurps Calculator

            <Checkbox label={"Blind"} value={-10}/>
            <Checkbox label={"Bad Footing"} value={-2}/>
            <Checkbox label={"Close Combat"} value={-2}/>
            <Checkbox label={"Large Shield"} value={-2}/>
            <Checkbox label={"Unfriendly Hex"} value={-4}/>
            <Checkbox label={"Grappled"} value={-4}/>


            <Textfield label={"Shock"} value={""}/>
            <Textfield label={"Darkness"} value={""}/>
            <Textfield label={"Improvised Weapon"} value={""}/>
            <Textfield label={"Distraction"} value={""}/>
        </div>
)
}

export default GurpsCalculator;