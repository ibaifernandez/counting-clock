import React from "react";
import { useState } from "react";

const ClockComponent = ({ font }) => {
    const [time, setTime] = useState(new Date());

    let timeString = time.toString();

    return (
        <>
            <div className="text-center pt-3">Hello!</div>
            <div
                className={`text-center ${
                    font === "font" ? "font" : "no-font"
                }`}
            >
                You loaded this page on
            </div>
            <div className="text-center pb-4"> {timeString}!</div>
            <button
                className="d-flex mx-auto"
                onClick={() => {
                    setTime(new Date());
                }}
            >
                What time is now?
            </button>
        </>
    );
};

export default ClockComponent;
