import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [msg, setMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("");
  const [errorFromBackend, setErrorFromBackend] = useState("true");

  //how we set error from backend
  useEffect(() => {
    fetch("http://localhost:3000/error")
      .then(res => {

        if (!res.ok) {
          return res.json()
            .then(err => {
              setErrorMsg(err.message);
              setErrorFromBackend(err.success)
            });
        }
      })
      .catch(err => setErrorMsg("Network error"));
  }, []);
  console.log(`this is for checking error coming from backend and not >>> ${errorFromBackend}`);

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
      <div>
        <img src="http://localhost:3000/img.jpg" alt="image don't show" />
      </div>

      {/* For Error from backend */}
      <div>
        <h1>Error From Backend</h1>
        <p>{errorMsg}</p>
      </div>

    </>
  )
}

export default App
