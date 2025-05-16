import './App.css'
import Home from './import_export_component/home'
import Timer from './Hooks/UseEffect_hooks'
import Favorite_color from './Hooks/UseState_hooks'
import ThemeProvider, { User } from './Hooks/UseContext'
import ChildComponent from './Hooks/UseContext'
import First from './class_component/first'
import Array_loop from './Loop_in_React_with_array/array_loop'
import Nested_loop_array from './Loop_in_React_with_array/nested_loop_array'
import Simple_props from './Props/simple_props'

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
      <h1>Import export componet and Function Component</h1>
      <Home />
      <h1>Class Component</h1>
      <First />
      <h1>Loops in React using Array</h1>
      <Array_loop/>
      <h3>Nested loop using array</h3>
      <Nested_loop_array/>
      <h1>Props in React</h1>
      <Simple_props name="Appaso"/>
      <Simple_props name="Ajay"/>
    </div>
  )
}

export default App
