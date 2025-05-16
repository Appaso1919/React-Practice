import './App.css'
import Timer from './UseEffect_hooks'
import Favorite_color from './UseState_hooks'

function App() {
  
  return (
    <div>
      <h3>Hooks in useState</h3>
      <Favorite_color />
      <h3>Hooks in useEffect</h3>
      <Timer />
    </div>
  )
}

export default App
