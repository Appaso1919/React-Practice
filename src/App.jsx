import './App.css'
import Home from './import_export_component/home'
import Timer from './Hooks/UseEffect_hooks'
import Favorite_color from './Hooks/UseState_hooks'
import ThemeProvider, { User } from './Hooks/UseContext'
import ChildComponent from './Hooks/UseContext'

function App() {
  
  return (
    <div>
      <h1>Hooks</h1>
      <h3>Hooks in useState</h3>
      <Favorite_color />
      <h3>Hooks in useEffect</h3>
      <Timer />
      <h3>Hooks in useContext</h3>
      <User />
      <h1>Import export componet</h1>
      <Home />
    </div>
  )
}

export default App
