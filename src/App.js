import "./App.scss"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
