import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/todosSlice";
import { v4 as uuidv4 } from 'uuid';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Todos } from "./pages/Todos";

function App() {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const todos = useSelector(({todos}) => todos)
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo({
      description,
      date
    }))
  }

  return (
    <div>
      <h1>Todo app</h1>
        <Routes>
          <Route path='/' element = {
            <>
              <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
              <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />

              <button onClick={handleAdd}>Add</button>

              <ul>
                {Object.entries(todos).map(([date, list]) => {
                  // console.log('=====================')
                  // console.log('date', date)
                  // console.log('list', list)
                  return (
                    <li key={uuidv4()}>{date} : count {list.length}:  <Link to={`/todos/${date}`}>Details</Link></li>
                  )
                })}
              </ul>
            </>
          }/>
          <Route path='todos/:date' element = {<Todos />}/>
        </Routes>
    </div>
  );
}

export default App;
