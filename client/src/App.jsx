import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/home'


function App() {

  return (
      <main className='app transition-all ease-in'>
        <Home />
        <Canvas />
        <Customizer /> 
        <h1 className="head-text">Three JS</h1>
      </main>
     
  )
}

export default App
