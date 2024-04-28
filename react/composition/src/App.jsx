import './App.css'
import Container from './Container'
import { Welcome } from './Welcome'

function App() {
  return (
    <Container title="Haz click para revelar contenido">
      <Welcome name='John' age={25} />
    </Container>
  )
}

export default App
