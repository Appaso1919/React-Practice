import './App.css'
import Home from './import_export_component/home'
import Timer from './Hooks/UseEffect_hooks'
import Favorite_color from './Hooks/UseState_hooks'

function App() {
  
  return (
    <div>
      <h3>Hooks in useState</h3>
      <Favorite_color />
      <h3>Hooks in useEffect</h3>
      <Timer />
      <h3>Import export componet</h3>
      <Home />
    </div>
  )
}

export default App
