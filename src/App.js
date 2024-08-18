import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"

function App() {
  return (
    <div className="">
      <main className="font-poppins">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
