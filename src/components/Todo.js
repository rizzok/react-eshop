import { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 50%;
  min-width: 45%;
  margin: 0 auto;

  & li {
    margin: 0.5rem 0;
  }

  & input[type=checkbox] {
    margin-right: 1rem;
  }
`

export default function Todo() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTodos(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <StyledDiv>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" name={"todo" + todo.id} id={"todo" + todo.id} defaultChecked={todo.completed}/>
              <label htmlFor={"todo" + todo.id}>{todo.title}</label>
            </li>
          ))}
        </ul>
      </StyledDiv>
    );
  }
}
