import React, { useState } from 'react';

import './App.css';
import Task from './components/Todo';


function App() {

  function deleteTodo(e) {
    e.preventDefault();

    let index = e.target.value;

    inputArray.splice(index, 1);

    setInputArray([...inputArray]);
  }

  const [inputTitle, setInputTitle] = useState('');
  const [inputDetails, setInputDetails] = useState('');
  const [inputArray, setInputArray] = useState([

    {
      inputTitle: "Excercise",
      inputDetails: "Hariom Guriji"
    },
    {
      inputTitle: "Meditate",
      inputDetails: "Hariom Guriji"
    }
  ]);
  // This is short term memory. This data will be pulled from DB in real time.
  const [todos, setTodos] = useState([

    // {
    //   title: "Meditate",
    //   details: "Hariom Guriji"
    // },

    // {
    //   title: "Excercise",
    //   details: "Go for it"
    // }
    // ,
    // {
    //   title: "Learn React",
    //   details: "Sonny Rocks"
    // }
    // ,
    // {
    //   title: "Learn JS",
    //   details: "Naz Rocks"
    // }
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem =
      {
        inputTitle: inputTitle,
        inputDetails: inputDetails
      };

    setInputArray([...inputArray, newItem]);
    setTodos([...todos, inputTitle]);
    setInputTitle('');
    setInputDetails('');
  }

  return (
    <div className="app">


      <h1>To-do app</h1>
      <form className="inputForm" action=" ">
        <input className="inputRow inputData" type="text" onChange={e => setInputTitle(e.target.value)} value={inputTitle} />
        {/* <textarea name="tododetails" id="details" cols="10" rows="5" onChange={e => setInputDetails(e.target.value)} value={inputDetails} ></textarea> */}
        <button className="inputRow addButton" disabled={!(inputTitle || inputDetails)} type="submit" onClick={handleSubmit}>ADD </button>
      </form>
      {
        inputArray.map(todo => (
          <Task title={todo.inputTitle} details={todo.inputDetails}
            deleteTodo={deleteTodo} />
        ))
      }
      {/* <Task title="Meditate" details="Guruji" />
      <Task title="Study React" details="Watch Sonny's videos" />
      <Task title="Study JS" details="Watch Naz's videos" />
      <Task title="Execise" details="Do Yoga" /> */}
    </div >

    // <div className="App" >
    //   <h1>Welcome to the world of React, Naresh</h1>
    //   <Task title="Meditate" details="Guruji" />
    //   <Task title="Study React" details="Watch Sonny's videos" />
    //   <Task title="Study JS" details="Watch Naz's videos" />
    //   <Task title="Execise" details="Do Yoga" />
    //   <div className="container">
    //     {articles.map((article, index) => (
    //       <Task title={`${index + 1}:{article}`} />
    //     ))}
    //   </div>
    // </div>

  );
}



export default App;