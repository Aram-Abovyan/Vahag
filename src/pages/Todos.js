import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../redux/todosSlice";

export const Todos = () => {
  const { date } = useParams();
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }) => todos[date]);

  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [editId, setEditId] = useState('');

  const handleEdit = (todoId) => () => {
    const { description } = todos.find(({ id }) => id === todoId)

    setEditId(todoId)
    setEditValue(description);
    setEditMode(true)
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  }

  const handleConfirm = () => {
    dispatch(updateTodo({date, description: editValue, id: editId}))
    setEditMode(false)
  };

  return (
    <>
      <ul>
        {todos?.map(({ id, description, completed }) => (
          <li key={id}>
            description: {description}
            <input
              type="checkbox"
              checked={completed}
            />

            <button onClick={handleEdit(id)}>edit</button>
            <button>delete</button>
          </li>
        ))}
      </ul>
      {editMode && (
        <>
          <input type="text" value={editValue} onChange={handleEditChange} />
          <button onClick={handleConfirm}>confirm</button>
        </>
      )}
    </>
  )
}
