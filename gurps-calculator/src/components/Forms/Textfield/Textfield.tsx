
import React from "react";

interface IProps {
label: string
value: string
icon?: boolean
}


const Textfield: React.FC<IProps> = ({
label,
value,
icon
}

) => {
    return (
            <div>
                <label>
                    {label}
                </label>
            <input>

            </input>
            </div>
)
}

export default Textfield;
