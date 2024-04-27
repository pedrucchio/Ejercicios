import './App.css'
import Colors from './Colors'

function App() {
  const colors = [
    {id:1,name:"blue"},
    {id:2,name:"green"},
    {id:3,name:"red"},
    {id:4,name:"black"},
    {id:5,name:"white"},
  ]

  return (
    <div>
      <Colors arrayColor={colors}/>
    </div>
  )
}

export default App
