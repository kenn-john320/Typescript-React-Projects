import React from "react";

import Textfield from "./Forms/Textfield/Textfield";
import Checkbox from "./Forms/Checkbox/Checkbox";

// interface IProps {
// label: string
// value: number
// icon?: boolean
// }

const GurpsCalculator: React.FC<{}> = (


) => {
return (
        <div>
            Gurps Calculator

            <Checkbox label={"Blind"} value={true}/>
            <Checkbox label={"Bad Footing"} value={false}/>

            <Textfield label={"Damage"} value={""}/>
        </div>
)
}

export default GurpsCalculator;