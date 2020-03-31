import React from 'react'

const Course = (props) => {
    const {course} = props;
    const parts = course.parts;

    return (
    <div>
        <h1>{course.name}</h1>
        <ul>
            {course.parts.map((part, id) =>
            <Content key={id} course={part}/>
            )}
        </ul>
        <TotalExercises exercises={parts}/>
    </div>
    )
}
const TotalExercises = ({ exercises }) =>{
    let initialValue = 0;
    const total = exercises.reduce( (accumulator , currentValue) => {
        return accumulator + currentValue.exercises
    }, initialValue)
    return(
        <p><strong>Total of {total} exercises</strong></p>
    ) 
}


const Content = ({ id, course }) =>{
    return <li key={id}>
        {course.name} - {course.exercises} exercices
            </li>
}


export default Course