# Counting Clock

## The structure of the project

```
counting-clock
├─ docs
├─ src
│  ├─ img
│  ├─ js
│  │  └─ components
│  └─ styles
└─ store
   ├─ js
   ├─ md
   └─ svg

```

## An explanation on the code

### At `index.js`

    import React from "react";                                      //  Import React
    import ReactDOM from "react-dom";                               //  Import ReactDOM
    import "../styles/index.css";                                   //  Import stylesheet
    import Home from "./components/Home.jsx";                       //  Import component 'Home' from its relative path

    ReactDOM.render(<Home />, document.querySelector("#app"));      //  Render component <Home /> (the WHAT), within whatever is id-ed with
                                                                    //  "app"

### At `Home.jsx`

    import React from "react";                                      //  Import React
    import ClockComponent from "./Clock.jsx";                       //  Import component ClockComponent from its relative path

    const Home = () => {                                            //  Declaration of component <Home /> as an anonymous arrow function
        return <ClockComponent myFontSize="small" />;               //  that returns <ClockComponent /> with the property "myFontSize" with
                                                                    //  the value "small"
    };

    export default Home;                                            //  Export component <Home /> to be used elsewhere

### At `Clock.jsx`

    import React from "react";                                                          //  Import React
    import { useState } from "react";                                                   //  Import "useState"

    const ClockComponent = ({ myFontSize }) => {                                        //  Declaration of component <ClockComponent /> as
                                                                                            an arrow function that will take the
                                                                                            (deconstructed) property 'myFontSize' (called
                                                                                            as property of <ClockComponent /> at Home.jsx)
                                                                                            as argument.

        const [time, setTime] = useState(new Date());                                   //  Generation of the variable 'time' and the
                                                                                            function 'setTime'. The former will receive the
                                                                                            value of 'new Date()'.

        const [font, setFont] = useState(myFontSize);                                   //  Generation of the variable 'font and the
                                                                                            function 'setFont'. The former will receive the
                                                                                            value of 'myfontSize', which is the
                                                                                            (deconstructed) property that is being dragged
                                                                                            from calling component <ClockComponent> at
                                                                                            Home.jsx. This is:
                                                                                                · Home.jsx              =>  Clock.jsx
                                                                                                · myFontSize="small"    =>  font="small"

        let timeString = time.toLocaleTimeString("ES-es");                              //  We declare the variable timeString, and assign
                                                                                            a value of time.toLocaleTimeString("ES-es") to
                                                                                            it.

                                                                                        //  The ".toLocaleTimeString("ES-es")" returns a
                                                                                            string with a language-sensitive representation of
                                                                                            the time portion of the date.

        console.log(time);                                                              //  Returns "Fri Feb 03 2023 14:01:39 GMT-0500
                                                                                            (hora de Ecuador)" —the whole result of
                                                                                            'new Date()'.

        console.log(timeString);                                                        //  Returns "14:01:39" —the time portion of the
                                                                                            date.

        return (                                                                        //  Returns (renders)
            <>
                <div className="text-center pt-3">Hello!</div>                          //  A <div> that says "Hello!"
                <div className={`text-center ${font}`}>You loaded this page at</div>    //  A <div> that says "You loaded this page at" with
                                                                                        //  a variable in the form of Template Literal
                                                                                            which, at the moment of the first render equals
                                                                                            myFontSize, which, passed as a property from
                                                                                            Home.jsx, equates to "small". This is:
                                                                                                · Home.jsx              =>  Clock.jsx
                                                                                                · myFontSize="small"    =>  font="small"

                <div className="text-center pb-4 fs-1"> {timeString} h.</div>           //  A <div> that contains the value of 'timeString'

                <button                                                                 //  A <button> that...
                    className="d-flex mx-auto"                                              ...
                    onClick={() => {                                                        sets the event 'onClick' in such a manner that
                        setTime(new Date());                                                the function 'setTime' is called to set a new
                    }}                                                                      date with 'new Date()'
                >
                    What time is now?
                </button>
                <button                                                                 //  And a <button> that sets the event
                    className="d-flex mx-auto mt-3"                                         ...
                    onClick={() => setFont(myFontSize === font ? "large" : "small")}        'onClick' in such a manner that the function
                                                                                            setFont is called to set a new value for the
                                                                                            variable 'font'. To do so, it goes like:

                                                                                                · Is 'myFontSize' equal to 'font'?

                                                                                                    · 'font' was initially assigned with the
                                                                                                      value of 'myFontSize' thru
                                                                                                      "useState(myfontSize)", which brings the
                                                                                                      value "small" from Home.jsx as it was the
                                                                                                      value assigned to the property
                                                                                                      'myFontSize' when declaring the contents
                                                                                                      of the component <Home /> at Home.jsx. Thus:

                                                                                                        · myFontSize = "small" (at Home.jsx)
                                                                                                        · font = myFontSize (thru 'useState')
                                                                                                        · font = myFontSize = "small"
                                                                                                        · font = "small"

                                                                                                    · Definitively so, myfontSize = font since both of them start with the value "small".

                                                                                                    · Well, if 'myFontSize' equals to 'font',
                                                                                                      use the function 'setFont' to set 'font'
                                                                                                      to "large".

                                                                                                    · Otherwise, turn the other way around and
                                                                                                      do 'setFont("small")'

                                                                                                    And that's how the switch works.
                >
                    Change Font Size
                </button>
            </>
        );
    };

    export default ClockComponent;
