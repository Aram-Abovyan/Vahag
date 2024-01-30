import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

export const Todos = () => {
  const { date } = useParams();
  const todos = useSelector(({ todos }) => todos[date])

  return (
    <ul>
      {todos?.map(({ description }) => (
        <li key={uuidv4()}>description: {description}</li>
      ))}
    </ul>
  )
}
