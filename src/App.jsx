import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Header />
      <main>
        <p>Hello World</p>
      </main>
    </div>
  )
}

export default App
