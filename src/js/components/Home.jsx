import React from "react";
import ClockComponent from "./Clock.jsx";

const Home = (props) => {
    console.log(props);
    return <ClockComponent font={props.font} />;
};

export default Home;
