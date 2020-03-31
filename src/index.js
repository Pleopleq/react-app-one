import React from 'react'
import ReactDOM from 'react-dom'

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
    
const App = () => {

    const course = [
        { 
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name:'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 3

            }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1 
            },
            {
                name:'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }     
 ]


  return (
    <div>
        <Course course={course[0]}/>
        <Course course={course[1]}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))