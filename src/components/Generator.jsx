import React from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS } from "../utils/exercise";

function Header(props){
    const {index, title, description} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text:base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator() {
    return ( // unlike in our App.jsx the Generator.jsx must have an opening and closing component
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Grind', 'Time']}>
        <Header index={'01'} title={'Workout Select'} description={"Select the workout that you would like to complete"} />
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
                <button key={typeIndex}>
                    <p>{type}</p>
                </button>
            )
        })}
    </SectionWrapper>
    )
}