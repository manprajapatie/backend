import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [msg, setMsg] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/api/massage')
      .then(res => res.json())
      .then(data => setMsg(data))
  }, [])

  return (
    <>
      <h1>This is Data from Backend</h1>
      <p>
        {msg.massage}
      </p>

    </>
  )
}

export default App
