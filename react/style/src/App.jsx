import { Clock } from './Clock'
import TodoList from './TodoList'
import { Welcome } from './Welcome'

function App() {

  return (
    <div>
      <Welcome name='John' age={30}/>
      <Clock />
      <TodoList />
    </div>
  )
}

export default App
