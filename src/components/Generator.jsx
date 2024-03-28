import React,{ useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/exercise";

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
    const [showModal, setShowModal] = useState(false) //importing useState and makes this a REACT stateful variable
    const [workout, setWorkout] = useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goal, setGoal] = useState('strength_power') 
    //let showModal = false 
    function toggleModal() { 
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {

        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

    if (workout !== 'individual') {
        setMuscles([muscleGroup])
        return
    }

    setMuscles([...muscles, muscleGroup])

    }


    return ( // unlike in our App.jsx the Generator.jsx must have an opening and closing component
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Grind', 'Time']}>
        <Header index={'01'} title={'Workout Select'} description={"Select the workout that you would like to complete"} />
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'> 
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
                <button onClick={() => {
                    setWorkout(type)
                }} className={'bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg ' + (type === workout ? ' border-blue-600' : ' border-blue-400')} key={typeIndex}>
                    <p className='Capitalize'>{type.replaceAll('_', " ")}</p>
                </button>
            )
        })}
        </div> 
        <Header index={'02'} title={'Whats your target?'} description={"Select the muscles you'd like to work."} />
        <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'> 
            <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                <p>Select Muscle Groups</p>
                <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
            </button>
            {showModal && (
                <div className='flex flex-col p-3'>
                    {(workout === 'individual' ? WORKOUTS[workout] : Object.keys(WORKOUTS[workout])).map((muscleGroup, muscleGroupIndex) => {
                        return (
                            <button onClick={() => {
                                updateMuscles(muscleGroup)
                            }} key={muscleGroupIndex} className={' hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                <p className='uppercase'>{muscleGroup}</p>
                            </button>
                        )
                    })}
                </div>
            )}
        </div> 
        <Header index={'03'} title={'Goal'} description={"Select the the goal that best fits you're needs."} />
        <div className='grid grid-cols-3 gap-4'> 
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
                <button onClick={() => {
                    setGoal(scheme)
                }} className={'bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg ' + (scheme === goal ? ' border-blue-600' : ' border-blue-400')} key={schemeIndex}>
                    <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                </button>
            )
        })}
        </div> 
    </SectionWrapper> // div className puts buttons in correct location, button className styles those buttons.
    )
}