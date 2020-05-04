import React from "react";

function Vulnerabilities({types}) {
    return(
        <div>
            <h2>Hello</h2>
            <p>World</p>
            {types.map((obj) => {
                return <p key={obj.type.name}>{obj.type.name}</p>;
              })}
        </div>
    )
}

export defautl Vulnerabilities