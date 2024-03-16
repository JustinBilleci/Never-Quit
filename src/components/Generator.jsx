import React from "react";
import SectionWrapper from "./SectionWrapper";

export default function Generator() {
    return ( // unlike in our App.jsx the Generator.jsx must have an opening and closing component
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Grind', 'Time']}>
        hello world
    </SectionWrapper >
    )
}