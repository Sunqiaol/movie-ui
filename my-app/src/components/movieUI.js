import React from "react";

export default function movieUI(title,year){
    return(
        <li>
            <div>
                {title}
            </div>

            <div>
                {year}
            </div>

        </li>
    )
}