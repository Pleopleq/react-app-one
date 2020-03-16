import React from 'react'
import ReactDOM from 'react-dom'

const exercises = {
    one: 10,
    two: 7,
    three: 14
}

const Header = (props) => {

    return (
    <h1>
        {props.course}
    </h1>
    )
}

const Part = (props) =>{
    
    return(
    <p>{props.part} {props.exercies}</p>
    )
}

const Content = () =>{
    const part1 = 'Fundamentals of React';
    const part2 = 'Using props to pass data';
    const part3 = 'State of a component';

    return(
    <div>
        <Part part={part1} exercies={exercises.one}/>
        <Part part={part2} exercies={exercises.two}/>
        <Part part={part3} exercies={exercises.three}/>
    </div>
    )
}

const Total = () =>{

    return (
    <strong><p>Number of exercises { exercises.one + exercises.two + exercises.three}</p></strong>
 )
}


const App = () => {
    const course = 'Half stack application development';
  return (
    <div>
        <Header course={course} />
        <Content/>
        <Total/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))