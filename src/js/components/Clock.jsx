import React from "react";
import { useState } from "react";

const ClockComponent = ({ myFontSize }) => {
    const [time, setTime] = useState(new Date());
    const [font, setFont] = useState(myFontSize);
    console.log(font);

    let timeString = time.toLocaleTimeString("ES-es");
    console.log(time);
    console.log(timeString);

    return (
        <>
            <div className="text-center pt-3">Hello!</div>
            <div className={`text-center ${font}`}>You loaded this page at</div>
            <div className="text-center pb-4 fs-1"> {timeString} h.</div>
            <button
                className="d-flex mx-auto"
                onClick={() => {
                    setTime(new Date());
                }}
            >
                What time is now?
            </button>
            <button
                className="d-flex mx-auto mt-3"
                onClick={() => setFont(myFontSize === font ? "large" : "small")}
            >
                Change Font Size
            </button>
        </>
    );
};

export default ClockComponent;
