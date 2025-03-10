import React from "react";

interface IProps {
label: string
value: number
checked?: boolean
icon?: boolean
}

const Checkbox: React.FC<IProps> = ({
    label
    
}
) => {
    const onClick = (func: () => void): void => {

        }

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
