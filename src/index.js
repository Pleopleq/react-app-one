import React from 'react'
import ReactDOM from 'react-dom'

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
    const exercises1 = 10;
    const exercises2 = 7;
    const exercises3 = 14;

    return(
    <div>
        <Part part={part1} exercies={exercises1}/>
        <Part part={part2} exercies={exercises2}/>
        <Part part={part3} exercies={exercises3}/>
    </div>
    )
}

const Total = () =>{
    const exercises1 = 10;
    const exercises2 = 7;
    const exercises3 = 14;

    return (
    <strong><p>Number of exercises { exercises1 + exercises2 + exercises3}</p></strong>
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