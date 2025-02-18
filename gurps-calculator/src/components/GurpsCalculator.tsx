import React from "react";

import Textfield from "./Forms/Textfield/Textfield";
import Checkbox from "./Forms/Checkbox/Checkbox";

interface IProps {
label: string
value: number
}

const GurpsCalculator: React.FC<IProps> = (
{
    label,
    value
}

) => {
return (
        <div>
            Gurps Calculator

            <Checkbox label={"Blind"} value={true}/>
            <Checkbox label={"Bad Footing"} value={false}/>
            <Checkbox label={"Close Combat"} value={false}/>
            <Checkbox label={"Large Shield"} value={false}/>
            <Checkbox label={"Bad Unfriendly Hex"} value={false}/>
            <Checkbox label={"Grappled"} value={false}/>


            <Textfield label={"Shock"} value={""}/>
            <Textfield label={"Darkness"} value={""}/>
            <Textfield label={"Improvised Weapon"} value={""}/>
            <Textfield label={"Distraction"} value={""}/>
        </div>
)
}

export default GurpsCalculator;