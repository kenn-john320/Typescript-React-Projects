import React from "react";

interface IProps {
label: string
value: boolean
icon?: boolean
}

const Checkbox: React.FC<IProps> = ({
    label

}
) => {
return (
    <div>
        <label>
            {label}
        </label>
        <input type="checkbox">
        </input>
    </div>
)
}

export default Checkbox;
