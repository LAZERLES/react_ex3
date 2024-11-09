import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Projectspage from './projects/Projectspage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Projectspage />
      </div>
    </>
  )
}

export default App
