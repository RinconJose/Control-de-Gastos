import { useState } from 'react'
import Header from './components/Header'

function App() {

  // Componentes que pasan por más de un componente
  const [presupuesto, setPresupuesto] = useState(0);

  return (
    <div>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
    </div>
  )
}

export default App