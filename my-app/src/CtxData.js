import React, { createContext, useState } from "react";
export const ctx = createContext();
export default function CtxData(props) {
    const [submitTime, SetSubmitTime] = useState({});
    return (
        <div>
            <ctx.Provider
                value={{
                    submitTime,
                    SetSubmitTime,
                }}
            >
                {props.children}
            </ctx.Provider>
        </div>
    );
}
