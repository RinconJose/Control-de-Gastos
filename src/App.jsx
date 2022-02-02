import { useState } from 'react'
import Header from './components/Header'

function App() {

  //Componentes que pasan por más de un componente
  cosnt [presupuesto, setPresupuesto] = useState(0);

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
