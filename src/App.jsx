
import './App.css'
// import  {Provider}
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {

  return (
    <>
      <h1>Redux-todo app</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
